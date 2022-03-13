import {
    CreateUserLikeInput,
    CreateUserLikeMutationVariables,
    DeleteUserLikeInput,
    DeleteUserLikeMutationVariables,
    Drawing,
    Game,
    GetGameQueryVariables,
    ListDrawingsQueryVariables,
    ListGamesQueryVariables,
    User,
} from "API";
import { API } from "aws-amplify";
import { createUserLike, deleteUserLike } from "graphql/mutations";
import { getGame, getUser, listDrawings } from "graphql/queries";

const createFilterFromDrawings = (drawings: Array<Drawing>) => {
    const filter = drawings.reduce<any>(
        (acc, { type, id }) => {
            if (!id || !type) return acc;
            switch (type) {
                default:
                case "head":
                    acc.and.or.push({ gameHeadId: { eq: id } });
                    break;
                case "legs":
                    acc.and.or.push({ gameLegsId: { eq: id } });
                    break;
                case "torso":
                    acc.and.or.push({ gameTorsoId: { eq: id } });
                    break;
            }
            return acc;
        },
        {
            and: {
                gameLegsId: { attributeExists: true },
                gameTorsoId: { attributeExists: true },
                gameHeadId: { attributeExists: true },
                or: [],
            },
        }
    );
    return { filter };
};

export const getGameById = (input: GetGameQueryVariables) => {
    return new Promise<Game>(async (resolve, reject) => {
        const response = (await API.graphql({
            query: getGame,
            variables: input,
        })) as any;
        resolve(response.data.getGame);
    });
};

export const getGamesMin = (input: ListGamesQueryVariables) => {
    return new Promise<{
        games: Array<Game>;
    }>(async (resolve, reject) => {
        try {
            const response = (await API.graphql({
                query: listGamesMin,
                variables: input,
            })) as any;

            let games = response.data.listGames.items;

            if (response.data.listGames.nextToken !== null) {
                input.nextToken = response.data.listDrawings.nextToken;
                const newResponse = await getGamesMin(input);
                games = [...games, newResponse.games];
            }

            resolve({
                games: games as Array<Game>,
            });
        } catch (e) {
            console.log(e);
        }
    });
};

export const getDrawingsMin = (input: ListDrawingsQueryVariables) => {
    return new Promise<{
        drawings: Array<Drawing>;
        nextToken: string | null | undefined;
    }>(async (resolve, reject) => {
        let response = (await API.graphql({
            query: listDrawingsMin,
            variables: input,
        })) as any;
        let drawings = response.data.listDrawings.items;
        if (response.data.listDrawings.nextToken !== null) {
            input.nextToken = response.data.listDrawings.nextToken;
            const newResponse = await getDrawingsMin(input);
            drawings = [...drawings, ...newResponse.drawings];
        }
        resolve({
            drawings: drawings as Array<Drawing>,
            nextToken: response.data.listDrawings.nextToken as string | null,
        });
    });
};

export const getFinishedGamesByDrawing = (drawings: Array<Drawing>) => {
    return new Promise<{
        games: Array<Game>;
    }>(async (resolve, reject) => {
        const chunkSize = 20;
        let chunks = new Array<Array<Drawing>>(),
            i = 0,
            n = drawings.length;
        while (i < n) {
            chunks.push(drawings.slice(i, (i += chunkSize)));
        }
        const promises = chunks
            .filter((c) => c.length > 0)
            .map((c) => {
                let filter = createFilterFromDrawings(c);
                return getGamesMin(filter);
            });
        const response = await Promise.all(promises);
        const games = response.reduce((acc, cur) => {
            return [...acc, ...cur.games];
        }, new Array<Game>());
        resolve({ games });
    });
};

export const getSuggestedDrawing = () => {
    return new Promise<string>(async (resolve, reject) => {
        const response = (await API.graphql({
            query: listDrawingTalliesMin,
        })) as any;
        const minTally = response.data.listDrawingTallies.items.reduce(
            (acc: any, val: any) => {
                if (!acc) return val;
                else if (acc.count > val.count) return val;
                else if (acc.count < val.count) return acc;
                else return Math.round(Math.random()) === 1 ? acc : val;
            }
        );
        resolve(minTally.id);
    });
};

export const getUsername = (email: string) => {
    return new Promise<User>(async (resolve, reject) => {
        const { data } = (await API.graphql({
            query: getUser,
            variables: {
                id: email,
            },
        })) as any;
        if (data.getUser) resolve(data.getUser);
        else reject(data.error);
    });
};

/************************************************************************************
 *                             MUTATIONS                                            *
 ************************************************************************************/

export const unLikeDrawing = (like: DeleteUserLikeInput) => {
    return new Promise(async (resolve, reject) => {
        let variables: DeleteUserLikeMutationVariables = {
            input: like,
        };
        const { data } = (await API.graphql({
            query: deleteUserLike,
            variables,
        })) as any;

        resolve(data);
    });
};

export const likeDrawing = (like: CreateUserLikeInput) => {
    return new Promise(async (resolve, reject) => {
        let variables: CreateUserLikeMutationVariables = {
            input: like,
        };
        const { data } = (await API.graphql({
            query: createUserLike,
            variables,
        })) as any;

        resolve(data.createUserLike);
    });
};
/************************************************************************************
 *                             GRAPHQL QUERIES                                      *
 ************************************************************************************/

export const listGameInfo = /* GraphQL */ `
    query ListGames(
        $filter: ModelGameFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                password
                nsfw
                head {
                    id
                    artist
                    createdAt
                }
                torso {
                    id
                    artist
                    createdAt
                }
                legs {
                    id
                    artist
                    createdAt
                }
                UserReports {
                    nextToken
                    startedAt
                }
                UserLikes {
                    items {
                        id
                        gameID
                        user
                        _version
                    }
                }
                createdAt
                updatedAt
                gameHeadId
                gameTorsoId
                gameLegsId
            }
            nextToken
            startedAt
        }
    }
`;

export const listGamesWithLikes = /* GraphQL */ `
    query ListGames(
        $filter: ModelGameFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                password
                nsfw
                head {
                    id
                    lines
                    isRemoved
                    isComplete
                    type
                    artist
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                }
                torso {
                    id
                    lines
                    isRemoved
                    isComplete
                    type
                    artist
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                }
                legs {
                    id
                    lines
                    isRemoved
                    isComplete
                    type
                    artist
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                }
                UserReports {
                    nextToken
                    startedAt
                }
                UserLikes {
                    items {
                        id
                        gameID
                        user
                        _version
                        _deleted
                    }
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                gameHeadId
                gameTorsoId
                gameLegsId
            }
            nextToken
            startedAt
        }
    }
`;

export const listGamesMin = /* GraphQL */ `
    query ListGames(
        $filter: ModelGameFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                password
                nsfw
                head {
                    artist
                    createdAt
                }
                torso {
                    artist
                    createdAt
                }
                legs {
                    artist
                    createdAt
                }
                UserReports {
                    nextToken
                    startedAt
                }
                UserLikes {
                    items {
                        id
                        gameID
                        user
                        _version
                        _deleted
                    }
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                gameHeadId
                gameTorsoId
                gameLegsId
            }
            nextToken
            startedAt
        }
    }
`;

export const syncGameListMin = /* GraphQL */ `
    query SyncGames(
        $filter: ModelGameFilterInput
        $limit: Int
        $nextToken: String
    ) {
        syncGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                password
                nsfw
                head {
                    artist
                    createdAt
                }
                torso {
                    artist
                    createdAt
                }
                legs {
                    artist
                    createdAt
                }
                UserReports {
                    nextToken
                    startedAt
                }
                UserLikes {
                    items {
                        id
                        gameID
                        user
                        _version
                        _deleted
                    }
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                gameHeadId
                gameTorsoId
                gameLegsId
            }
            nextToken
            startedAt
        }
    }
`;

export const listDrawingsIdType = /* GraphQL */ `
    query ListDrawings(
        $filter: ModelDrawingFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listDrawings(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                type
            }
            nextToken
            startedAt
        }
    }
`;

export const listDrawingTalliesMin = /* GraphQL */ `
    query ListDrawingTallies(
        $filter: ModelDrawingTallyFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listDrawingTallies(
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
                id
                count
            }
        }
    }
`;

export const listDrawingsMin = /* GraphQL */ `
    query ListDrawings(
        $filter: ModelDrawingFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listDrawings(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                isRemoved
                type
                artist
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
            }
            nextToken
            startedAt
        }
    }
`;

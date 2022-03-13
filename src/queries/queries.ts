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

export const getGames = (input: ListGamesQueryVariables) => {
    return new Promise<{
        games: Array<Game>;
        nextToken: string | null | undefined;
    }>(async (resolve, reject) => {
        const response = (await API.graphql({
            query: listGamesWithLikes,
            variables: input,
        })) as any;
        resolve({
            games: response.data.listGames.items as Array<Game>,
            nextToken: response.data.listGames.nextToken as string | null,
        });
    });
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
        nextToken: string | null | undefined;
    }>(async (resolve, reject) => {
        const response = (await API.graphql({
            query: listGamesMin,
            variables: input,
        })) as any;
        resolve({
            games: response.data.listGames.items as Array<Game>,
            nextToken: response.data.listGames.nextToken as string | null,
        });
    });
};

export const syncGamesMin = (input: ListGamesQueryVariables) => {
    return new Promise<{
        games: Array<Game>;
        nextToken: string | null | undefined;
    }>(async (resolve, reject) => {
        const response = (await API.graphql({
            query: syncGameListMin,
            variables: input,
        })) as any;
        console.log(response);
        resolve({
            games: response.data.syncGames.items as Array<Game>,
            nextToken: response.data.syncGames.nextToken as string | null,
        });
    });
};

export const getDrawingIdType = (input: ListDrawingsQueryVariables) => {
    return new Promise<{
        drawings: Array<{ id: string; type: string }>;
        nextToken: string | null | undefined;
    }>(async (resolve, reject) => {
        const response = (await API.graphql({
            query: listDrawingsIdType,
            variables: input,
        })) as any;
        resolve({
            drawings: response.data.listDrawings.items as Array<{
                id: string;
                type: string;
            }>,
            nextToken: response.data.listGames.nextToken as string | null,
        });
    });
};

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

export const getDrawings = (input: ListDrawingsQueryVariables) => {
    return new Promise<{
        drawings: Array<Drawing>;
        nextToken: string | null | undefined;
    }>(async (resolve, reject) => {
        const response = (await API.graphql({
            query: listDrawings,
            variables: input,
        })) as any;
        resolve({
            drawings: response.data.listDrawings.items as Array<Drawing>,
            nextToken: response.data.listDrawings.nextToken as string | null,
        });
    });
};

export const getDrawingsMin = (input: ListDrawingsQueryVariables) => {
    return new Promise<{
        drawings: Array<Drawing>;
        nextToken: string | null | undefined;
    }>(async (resolve, reject) => {
        const response = (await API.graphql({
            query: listDrawingsMin,
            variables: input,
        })) as any;
        console.log("drawings min", response);
        resolve({
            drawings: response.data.listDrawings.items as Array<Drawing>,
            nextToken: response.data.listDrawings.nextToken as string | null,
        });
    });
};

export const getGamesByUsername = (input: ListDrawingsQueryVariables) => {
    return new Promise<{
        games: Array<Game>;
        nextToken: string | null | undefined;
    }>(async (resolve, reject) => {
        const { drawings } = await getDrawingsMin(input);

        if (!drawings || drawings.length === 0) {
            resolve({ games: [], nextToken: null });
        } else {
            //const first = drawings.shift();
            const filter = drawings.reduce<any>(
                (acc, { type, id }) => {
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
            const response = await getGamesMin({ filter: filter });
            resolve(response);
        }
    });
};

export const getFinishedGamesByDrawing = (drawings: Array<Drawing>) => {
    return new Promise<{
        games: Array<Game>;
        nextToken: string | null | undefined;
    }>(async (resolve, reject) => {
        //const first = drawings.shift();
        const filter = drawings.reduce<any>(
            (acc, { type, id }) => {
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
        const response = await getGamesMin({ filter: filter });
        resolve(response);
    });
};

export const getUnfishedGamesByUsername = (
    input: ListDrawingsQueryVariables
) => {
    return new Promise<{
        games: Array<Game>;
        nextToken: string | null | undefined;
    }>(async (resolve, reject) => {
        const { drawings } = await getDrawings(input);
        if (!drawings || drawings.length === 0) {
            resolve({ games: [], nextToken: null });
        }
        //const first = drawings.shift();
        const filter = drawings.reduce<any>(
            (acc, { type, id }) => {
                switch (type) {
                    default:
                    case "head":
                        acc.or.push({
                            and: [
                                { gameHeadId: { eq: id } },
                                {
                                    or: [
                                        {
                                            gameTorsoId: {
                                                attributeExists: false,
                                            },
                                        },
                                        {
                                            gameLegsId: {
                                                attributeExists: false,
                                            },
                                        },
                                    ],
                                },
                            ],
                        });
                        break;
                    case "legs":
                        acc.or.push({
                            and: [
                                { gameLegsId: { eq: id } },
                                {
                                    or: [
                                        {
                                            gameTorsoId: {
                                                attributeExists: false,
                                            },
                                        },
                                        {
                                            gameHeadId: {
                                                attributeExists: false,
                                            },
                                        },
                                    ],
                                },
                            ],
                        });
                        break;
                    case "torso":
                        acc.or.push({
                            and: [
                                { gameTorsoId: { eq: id } },
                                {
                                    or: [
                                        {
                                            gameHeadId: {
                                                attributeExists: false,
                                            },
                                        },
                                        {
                                            gameLegsId: {
                                                attributeExists: false,
                                            },
                                        },
                                    ],
                                },
                            ],
                        });
                        break;
                }
                return acc;
            },
            {
                or: [],
            }
        );

        console.log(filter);
        const response = await getGamesMin({ filter: filter });
        resolve(response);
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
        console.log(minTally);

        resolve(minTally.id);
    });
};

export const syncGamesByDrawing = (drawings: Array<Drawing>) => {
    return new Promise<{
        games: Array<Game>;
        nextToken: string | null | undefined;
    }>(async (resolve, reject) => {
        //const first = drawings.shift();
        const filter = drawings.reduce<any>(
            (acc, { type, id }) => {
                switch (type) {
                    default:
                    case "head":
                        acc.or.push({ gameHeadId: { eq: id } });
                        break;
                    case "legs":
                        acc.or.push({ gameLegsId: { eq: id } });
                        break;
                    case "torso":
                        acc.or.push({ gameTorsoId: { eq: id } });
                        break;
                }
                return acc;
            },
            {
                or: [],
            }
        );
        const response = await syncGamesMin({ filter: filter });
        resolve(response);
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

import { API } from "aws-amplify";

export function queryGamesByUsername(username: string) {
    return new Promise<[any]>(async (resolve, reject) => {
        const data = await API.post("rest", `/rest/listGames`, {
            body: {
                artist: username,
            },
        }).then(({ body, err }) => {
            if (err) {
                console.log(err);
                return [];
            }
            const response = JSON.parse(body);
            return response;
        });
        resolve(data);
    });
}

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

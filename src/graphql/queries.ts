/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserLike = /* GraphQL */ `
    query GetUserLike($id: ID!) {
        getUserLike(id: $id) {
            id
            user
            gameID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
        }
    }
`;
export const listUserLikes = /* GraphQL */ `
    query ListUserLikes(
        $filter: ModelUserLikeFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listUserLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                user
                gameID
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
export const syncUserLikes = /* GraphQL */ `
    query SyncUserLikes(
        $filter: ModelUserLikeFilterInput
        $limit: Int
        $nextToken: String
        $lastSync: AWSTimestamp
    ) {
        syncUserLikes(
            filter: $filter
            limit: $limit
            nextToken: $nextToken
            lastSync: $lastSync
        ) {
            items {
                id
                user
                gameID
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
export const getUserReport = /* GraphQL */ `
    query GetUserReport($id: ID!) {
        getUserReport(id: $id) {
            id
            isReviewed
            reportedBy
            gameID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
        }
    }
`;
export const listUserReports = /* GraphQL */ `
    query ListUserReports(
        $filter: ModelUserReportFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listUserReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                isReviewed
                reportedBy
                gameID
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
export const syncUserReports = /* GraphQL */ `
    query SyncUserReports(
        $filter: ModelUserReportFilterInput
        $limit: Int
        $nextToken: String
        $lastSync: AWSTimestamp
    ) {
        syncUserReports(
            filter: $filter
            limit: $limit
            nextToken: $nextToken
            lastSync: $lastSync
        ) {
            items {
                id
                isReviewed
                reportedBy
                gameID
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
export const getDrawingTally = /* GraphQL */ `
    query GetDrawingTally($id: ID!) {
        getDrawingTally(id: $id) {
            id
            count
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
        }
    }
`;
export const listDrawingTallies = /* GraphQL */ `
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
export const syncDrawingTallies = /* GraphQL */ `
    query SyncDrawingTallies(
        $filter: ModelDrawingTallyFilterInput
        $limit: Int
        $nextToken: String
        $lastSync: AWSTimestamp
    ) {
        syncDrawingTallies(
            filter: $filter
            limit: $limit
            nextToken: $nextToken
            lastSync: $lastSync
        ) {
            items {
                id
                count
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
export const getGame = /* GraphQL */ `
    query GetGame($id: ID!) {
        getGame(id: $id) {
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
                items {
                    id
                    isReviewed
                    reportedBy
                    gameID
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                }
                nextToken
                startedAt
            }
            UserLikes {
                items {
                    id
                    user
                    gameID
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                }
                nextToken
                startedAt
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
    }
`;
export const listGames = /* GraphQL */ `
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
                    nextToken
                    startedAt
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
export const syncGames = /* GraphQL */ `
    query SyncGames(
        $filter: ModelGameFilterInput
        $limit: Int
        $nextToken: String
        $lastSync: AWSTimestamp
    ) {
        syncGames(
            filter: $filter
            limit: $limit
            nextToken: $nextToken
            lastSync: $lastSync
        ) {
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
                    nextToken
                    startedAt
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
export const getUser = /* GraphQL */ `
    query GetUser($id: ID!) {
        getUser(id: $id) {
            id
            userName
            friends
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
        }
    }
`;
export const listUsers = /* GraphQL */ `
    query ListUsers(
        $filter: ModelUserFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                userName
                friends
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
export const syncUsers = /* GraphQL */ `
    query SyncUsers(
        $filter: ModelUserFilterInput
        $limit: Int
        $nextToken: String
        $lastSync: AWSTimestamp
    ) {
        syncUsers(
            filter: $filter
            limit: $limit
            nextToken: $nextToken
            lastSync: $lastSync
        ) {
            items {
                id
                userName
                friends
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
export const getDrawing = /* GraphQL */ `
    query GetDrawing($id: ID!) {
        getDrawing(id: $id) {
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
    }
`;
export const listDrawings = /* GraphQL */ `
    query ListDrawings(
        $filter: ModelDrawingFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listDrawings(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
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
            nextToken
            startedAt
        }
    }
`;

export const listGameInfo = /* GraphQL */ `
    query MyQuery($filter: ModelGameFilterInput!) {
        listGames(filter: $filter) {
            items {
                torso {
                    artist
                    updatedAt
                }
                legs {
                    artist
                    updatedAt
                }
                head {
                    artist
                    updatedAt
                }
            }
        }
    }
`;

export const syncDrawings = /* GraphQL */ `
    query SyncDrawings(
        $filter: ModelDrawingFilterInput
        $limit: Int
        $nextToken: String
        $lastSync: AWSTimestamp
    ) {
        syncDrawings(
            filter: $filter
            limit: $limit
            nextToken: $nextToken
            lastSync: $lastSync
        ) {
            items {
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
            nextToken
            startedAt
        }
    }
`;

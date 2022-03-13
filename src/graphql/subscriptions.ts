/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserReport = /* GraphQL */ `
    subscription OnCreateUserReport {
        onCreateUserReport {
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
export const onUpdateUserReport = /* GraphQL */ `
    subscription OnUpdateUserReport {
        onUpdateUserReport {
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
export const onDeleteUserReport = /* GraphQL */ `
    subscription OnDeleteUserReport {
        onDeleteUserReport {
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
export const onCreateUserLike = /* GraphQL */ `
    subscription OnCreateUserLike {
        onCreateUserLike {
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
export const onUpdateUserLike = /* GraphQL */ `
    subscription OnUpdateUserLike {
        onUpdateUserLike {
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
export const onDeleteUserLike = /* GraphQL */ `
    subscription OnDeleteUserLike {
        onDeleteUserLike {
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
export const onCreateDrawingTally = /* GraphQL */ `
    subscription OnCreateDrawingTally {
        onCreateDrawingTally {
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
export const onUpdateDrawingTally = /* GraphQL */ `
    subscription OnUpdateDrawingTally {
        onUpdateDrawingTally {
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
export const onDeleteDrawingTally = /* GraphQL */ `
    subscription OnDeleteDrawingTally {
        onDeleteDrawingTally {
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
export const onCreateGame = /* GraphQL */ `
    subscription OnCreateGame {
        onCreateGame {
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
export const onUpdateGame = /* GraphQL */ `
    subscription OnUpdateGame {
        onUpdateGame {
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
export const onUpdateGameMin = /* GraphQL */ `
    subscription OnUpdateGame {
        onUpdateGame {
            id
            gameHeadId
            gameTorsoId
            gameLegsId
        }
    }
`;
export const onDeleteGame = /* GraphQL */ `
    subscription OnDeleteGame {
        onDeleteGame {
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
export const onCreateUser = /* GraphQL */ `
    subscription OnCreateUser {
        onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
    subscription OnUpdateUser {
        onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
    subscription OnDeleteUser {
        onDeleteUser {
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
export const onCreateDrawing = /* GraphQL */ `
    subscription OnCreateDrawing {
        onCreateDrawing {
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
export const onUpdateDrawing = /* GraphQL */ `
    subscription OnUpdateDrawing {
        onUpdateDrawing {
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
export const onDeleteDrawing = /* GraphQL */ `
    subscription OnDeleteDrawing {
        onDeleteDrawing {
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

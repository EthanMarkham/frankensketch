/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

module.exports.onCreateUserReport = /* GraphQL */ `
    subscription OnCreateUserReport {
        onCreateUserReport {
            id
            target {
                id
                password
                nsfw
                deleted
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                gameHeadId
                gameTorsoId
                gameLegsId
            }
            createdBy {
                id
                userName
                friends
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
            }
            isReviewed
            reviewedBy {
                id
                userName
                friends
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userReportTargetId
            userReportCreatedById
            userReportReviewedById
        }
    }
`;
module.exports.onUpdateUserReport = /* GraphQL */ `
    subscription OnUpdateUserReport {
        onUpdateUserReport {
            id
            target {
                id
                password
                nsfw
                deleted
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                gameHeadId
                gameTorsoId
                gameLegsId
            }
            createdBy {
                id
                userName
                friends
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
            }
            isReviewed
            reviewedBy {
                id
                userName
                friends
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userReportTargetId
            userReportCreatedById
            userReportReviewedById
        }
    }
`;
module.exports.onDeleteUserReport = /* GraphQL */ `
    subscription OnDeleteUserReport {
        onDeleteUserReport {
            id
            target {
                id
                password
                nsfw
                deleted
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                gameHeadId
                gameTorsoId
                gameLegsId
            }
            createdBy {
                id
                userName
                friends
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
            }
            isReviewed
            reviewedBy {
                id
                userName
                friends
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userReportTargetId
            userReportCreatedById
            userReportReviewedById
        }
    }
`;
module.exports.onCreateErrorLog = /* GraphQL */ `
    subscription OnCreateErrorLog {
        onCreateErrorLog {
            id
            createdBy {
                id
                userName
                friends
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
            }
            error
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            errorLogCreatedById
        }
    }
`;
module.exports.onUpdateErrorLog = /* GraphQL */ `
    subscription OnUpdateErrorLog {
        onUpdateErrorLog {
            id
            createdBy {
                id
                userName
                friends
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
            }
            error
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            errorLogCreatedById
        }
    }
`;
module.exports.onDeleteErrorLog = /* GraphQL */ `
    subscription OnDeleteErrorLog {
        onDeleteErrorLog {
            id
            createdBy {
                id
                userName
                friends
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
            }
            error
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            errorLogCreatedById
        }
    }
`;
module.exports.onCreateDrawingTally = /* GraphQL */ `
    subscription OnCreateDrawingTally {
        onCreateDrawingTally {
            id
            type
            count
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
        }
    }
`;
module.exports.onUpdateDrawingTally = /* GraphQL */ `
    subscription OnUpdateDrawingTally {
        onUpdateDrawingTally {
            id
            type
            count
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
        }
    }
`;
module.exports.onDeleteDrawingTally = /* GraphQL */ `
    subscription OnDeleteDrawingTally {
        onDeleteDrawingTally {
            id
            type
            count
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
        }
    }
`;
module.exports.onCreateAuditLog = /* GraphQL */ `
    subscription OnCreateAuditLog {
        onCreateAuditLog {
            id
            targetID
            targetField
            oldValue
            newValue
            changedBy {
                id
                isReviewed
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userReportTargetId
                userReportCreatedById
                userReportReviewedById
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            auditLogChangedById
        }
    }
`;
module.exports.onUpdateAuditLog = /* GraphQL */ `
    subscription OnUpdateAuditLog {
        onUpdateAuditLog {
            id
            targetID
            targetField
            oldValue
            newValue
            changedBy {
                id
                isReviewed
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userReportTargetId
                userReportCreatedById
                userReportReviewedById
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            auditLogChangedById
        }
    }
`;
module.exports.onDeleteAuditLog = /* GraphQL */ `
    subscription OnDeleteAuditLog {
        onDeleteAuditLog {
            id
            targetID
            targetField
            oldValue
            newValue
            changedBy {
                id
                isReviewed
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userReportTargetId
                userReportCreatedById
                userReportReviewedById
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            auditLogChangedById
        }
    }
`;
module.exports.onCreateUserBan = /* GraphQL */ `
    subscription OnCreateUserBan {
        onCreateUserBan {
            id
            banLength
            CreatedBy {
                id
                userName
                friends
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
            }
            TargetUser {
                id
                userName
                friends
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
            }
            isAppealed
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userBanCreatedById
            userBanTargetUserId
        }
    }
`;
module.exports.onUpdateUserBan = /* GraphQL */ `
    subscription OnUpdateUserBan {
        onUpdateUserBan {
            id
            banLength
            CreatedBy {
                id
                userName
                friends
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
            }
            TargetUser {
                id
                userName
                friends
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
            }
            isAppealed
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userBanCreatedById
            userBanTargetUserId
        }
    }
`;
module.exports.onDeleteUserBan = /* GraphQL */ `
    subscription OnDeleteUserBan {
        onDeleteUserBan {
            id
            banLength
            CreatedBy {
                id
                userName
                friends
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
            }
            TargetUser {
                id
                userName
                friends
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
            }
            isAppealed
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userBanCreatedById
            userBanTargetUserId
        }
    }
`;
module.exports.onCreateUserLike = /* GraphQL */ `
    subscription OnCreateUserLike {
        onCreateUserLike {
            id
            gameID
            user {
                id
                userName
                friends
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
            }
            isRemoved
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userLikeUserId
        }
    }
`;
module.exports.onUpdateUserLike = /* GraphQL */ `
    subscription OnUpdateUserLike {
        onUpdateUserLike {
            id
            gameID
            user {
                id
                userName
                friends
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
            }
            isRemoved
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userLikeUserId
        }
    }
`;
module.exports.onDeleteUserLike = /* GraphQL */ `
    subscription OnDeleteUserLike {
        onDeleteUserLike {
            id
            gameID
            user {
                id
                userName
                friends
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
            }
            isRemoved
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userLikeUserId
        }
    }
`;
module.exports.onCreateGame = /* GraphQL */ `
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
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                drawingUserId
            }
            torso {
                id
                lines
                isRemoved
                isComplete
                type
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                drawingUserId
            }
            legs {
                id
                lines
                isRemoved
                isComplete
                type
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                drawingUserId
            }
            deleted
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
module.exports.onUpdateGame = /* GraphQL */ `
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
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                drawingUserId
            }
            torso {
                id
                lines
                isRemoved
                isComplete
                type
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                drawingUserId
            }
            legs {
                id
                lines
                isRemoved
                isComplete
                type
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                drawingUserId
            }
            deleted
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
module.exports.onDeleteGame = /* GraphQL */ `
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
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                drawingUserId
            }
            torso {
                id
                lines
                isRemoved
                isComplete
                type
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                drawingUserId
            }
            legs {
                id
                lines
                isRemoved
                isComplete
                type
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                drawingUserId
            }
            deleted
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
module.exports.onCreateUser = /* GraphQL */ `
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
module.exports.onUpdateUser = /* GraphQL */ `
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
module.exports.onDeleteUser = /* GraphQL */ `
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
module.exports.onCreateDrawing = /* GraphQL */ `
    subscription OnCreateDrawing {
        onCreateDrawing {
            id
            User {
                id
                isReviewed
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userReportTargetId
                userReportCreatedById
                userReportReviewedById
            }
            lines
            isRemoved
            isComplete
            type
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            drawingUserId
        }
    }
`;
module.exports.onUpdateDrawing = /* GraphQL */ `
    subscription OnUpdateDrawing {
        onUpdateDrawing {
            id
            User {
                id
                isReviewed
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userReportTargetId
                userReportCreatedById
                userReportReviewedById
            }
            lines
            isRemoved
            isComplete
            type
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            drawingUserId
        }
    }
`;
module.exports.onDeleteDrawing = /* GraphQL */ `
    subscription OnDeleteDrawing {
        onDeleteDrawing {
            id
            User {
                id
                isReviewed
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userReportTargetId
                userReportCreatedById
                userReportReviewedById
            }
            lines
            isRemoved
            isComplete
            type
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            drawingUserId
        }
    }
`;

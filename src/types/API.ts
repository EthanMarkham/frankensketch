/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserReportInput = {
    id?: string | null;
    isReviewed?: boolean | null;
    _version?: number | null;
    userReportTargetId?: string | null;
    userReportCreatedById?: string | null;
    userReportReviewedById?: string | null;
};

export type ModelUserReportConditionInput = {
    isReviewed?: ModelBooleanInput | null;
    and?: Array<ModelUserReportConditionInput | null> | null;
    or?: Array<ModelUserReportConditionInput | null> | null;
    not?: ModelUserReportConditionInput | null;
    userReportTargetId?: ModelIDInput | null;
    userReportCreatedById?: ModelIDInput | null;
    userReportReviewedById?: ModelIDInput | null;
};

export type ModelBooleanInput = {
    ne?: boolean | null;
    eq?: boolean | null;
    attributeExists?: boolean | null;
    attributeType?: ModelAttributeTypes | null;
};

export enum ModelAttributeTypes {
    binary = "binary",
    binarySet = "binarySet",
    bool = "bool",
    list = "list",
    map = "map",
    number = "number",
    numberSet = "numberSet",
    string = "string",
    stringSet = "stringSet",
    _null = "_null",
}

export type ModelIDInput = {
    ne?: string | null;
    eq?: string | null;
    le?: string | null;
    lt?: string | null;
    ge?: string | null;
    gt?: string | null;
    contains?: string | null;
    notContains?: string | null;
    between?: Array<string | null> | null;
    beginsWith?: string | null;
    attributeExists?: boolean | null;
    attributeType?: ModelAttributeTypes | null;
    size?: ModelSizeInput | null;
};

export type ModelSizeInput = {
    ne?: number | null;
    eq?: number | null;
    le?: number | null;
    lt?: number | null;
    ge?: number | null;
    gt?: number | null;
    between?: Array<number | null> | null;
};

export type UserReport = {
    __typename: "UserReport";
    id: string;
    target?: Game | null;
    createdBy?: User | null;
    isReviewed?: boolean | null;
    reviewedBy?: User | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    userReportTargetId?: string | null;
    userReportCreatedById?: string | null;
    userReportReviewedById?: string | null;
};

export type Game = {
    __typename: "Game";
    id: string;
    password?: string | null;
    nsfw?: boolean | null;
    head?: Drawing | null;
    torso?: Drawing | null;
    legs?: Drawing | null;
    deleted?: boolean | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    gameHeadId?: string | null;
    gameTorsoId?: string | null;
    gameLegsId?: string | null;
};

export type Drawing = {
    __typename: "Drawing";
    id: string;
    User?: UserReport | null;
    lines: string;
    artist: string;
    isRemoved: boolean;
    isComplete: boolean;
    submittedAt: string;
    type?: DrawingType | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    drawingUserId?: string | null;
};

export enum DrawingType {
    LEGS = "LEGS",
    HEAD = "HEAD",
    TORSO = "TORSO",
}

export type User = {
    __typename: "User";
    id: string;
    userName: string;
    friends: Array<string>;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
};

export type UpdateUserReportInput = {
    id: string;
    isReviewed?: boolean | null;
    _version?: number | null;
    userReportTargetId?: string | null;
    userReportCreatedById?: string | null;
    userReportReviewedById?: string | null;
};

export type DeleteUserReportInput = {
    id: string;
    _version?: number | null;
};

export type CreateErrorLogInput = {
    id?: string | null;
    error: string;
    _version?: number | null;
    errorLogCreatedById: string;
};

export type ModelErrorLogConditionInput = {
    error?: ModelStringInput | null;
    and?: Array<ModelErrorLogConditionInput | null> | null;
    or?: Array<ModelErrorLogConditionInput | null> | null;
    not?: ModelErrorLogConditionInput | null;
    errorLogCreatedById?: ModelIDInput | null;
};

export type ModelStringInput = {
    ne?: string | null;
    eq?: string | null;
    le?: string | null;
    lt?: string | null;
    ge?: string | null;
    gt?: string | null;
    contains?: string | null;
    notContains?: string | null;
    between?: Array<string | null> | null;
    beginsWith?: string | null;
    attributeExists?: boolean | null;
    attributeType?: ModelAttributeTypes | null;
    size?: ModelSizeInput | null;
};

export type ErrorLog = {
    __typename: "ErrorLog";
    id: string;
    createdBy: User;
    error: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    errorLogCreatedById: string;
};

export type UpdateErrorLogInput = {
    id: string;
    error?: string | null;
    _version?: number | null;
    errorLogCreatedById?: string | null;
};

export type DeleteErrorLogInput = {
    id: string;
    _version?: number | null;
};

export type CreateDrawingTallyInput = {
    id?: string | null;
    type?: DrawingType | null;
    count?: number | null;
    _version?: number | null;
};

export type ModelDrawingTallyConditionInput = {
    type?: ModelDrawingTypeInput | null;
    count?: ModelIntInput | null;
    and?: Array<ModelDrawingTallyConditionInput | null> | null;
    or?: Array<ModelDrawingTallyConditionInput | null> | null;
    not?: ModelDrawingTallyConditionInput | null;
};

export type ModelDrawingTypeInput = {
    eq?: DrawingType | null;
    ne?: DrawingType | null;
};

export type ModelIntInput = {
    ne?: number | null;
    eq?: number | null;
    le?: number | null;
    lt?: number | null;
    ge?: number | null;
    gt?: number | null;
    between?: Array<number | null> | null;
    attributeExists?: boolean | null;
    attributeType?: ModelAttributeTypes | null;
};

export type DrawingTally = {
    __typename: "DrawingTally";
    id: string;
    type?: DrawingType | null;
    count?: number | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
};

export type UpdateDrawingTallyInput = {
    id: string;
    type?: DrawingType | null;
    count?: number | null;
    _version?: number | null;
};

export type DeleteDrawingTallyInput = {
    id: string;
    _version?: number | null;
};

export type CreateAuditLogInput = {
    id?: string | null;
    targetID: string;
    targetField: string;
    oldValue: string;
    newValue: string;
    _version?: number | null;
    auditLogChangedById?: string | null;
};

export type ModelAuditLogConditionInput = {
    targetID?: ModelIDInput | null;
    targetField?: ModelStringInput | null;
    oldValue?: ModelStringInput | null;
    newValue?: ModelStringInput | null;
    and?: Array<ModelAuditLogConditionInput | null> | null;
    or?: Array<ModelAuditLogConditionInput | null> | null;
    not?: ModelAuditLogConditionInput | null;
    auditLogChangedById?: ModelIDInput | null;
};

export type AuditLog = {
    __typename: "AuditLog";
    id: string;
    targetID: string;
    targetField: string;
    oldValue: string;
    newValue: string;
    changedBy?: UserReport | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    auditLogChangedById?: string | null;
};

export type UpdateAuditLogInput = {
    id: string;
    targetID?: string | null;
    targetField?: string | null;
    oldValue?: string | null;
    newValue?: string | null;
    _version?: number | null;
    auditLogChangedById?: string | null;
};

export type DeleteAuditLogInput = {
    id: string;
    _version?: number | null;
};

export type CreateUserBanInput = {
    id?: string | null;
    banLength: number;
    isAppealed: boolean;
    _version?: number | null;
    userBanCreatedById: string;
    userBanTargetUserId: string;
};

export type ModelUserBanConditionInput = {
    banLength?: ModelIntInput | null;
    isAppealed?: ModelBooleanInput | null;
    and?: Array<ModelUserBanConditionInput | null> | null;
    or?: Array<ModelUserBanConditionInput | null> | null;
    not?: ModelUserBanConditionInput | null;
    userBanCreatedById?: ModelIDInput | null;
    userBanTargetUserId?: ModelIDInput | null;
};

export type UserBan = {
    __typename: "UserBan";
    id: string;
    banLength: number;
    CreatedBy: User;
    TargetUser: User;
    isAppealed: boolean;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    userBanCreatedById: string;
    userBanTargetUserId: string;
};

export type UpdateUserBanInput = {
    id: string;
    banLength?: number | null;
    isAppealed?: boolean | null;
    _version?: number | null;
    userBanCreatedById?: string | null;
    userBanTargetUserId?: string | null;
};

export type DeleteUserBanInput = {
    id: string;
    _version?: number | null;
};

export type CreateUserLikeInput = {
    id?: string | null;
    gameID?: string | null;
    isRemoved: boolean;
    _version?: number | null;
    userLikeUserId: string;
};

export type ModelUserLikeConditionInput = {
    gameID?: ModelIDInput | null;
    isRemoved?: ModelBooleanInput | null;
    and?: Array<ModelUserLikeConditionInput | null> | null;
    or?: Array<ModelUserLikeConditionInput | null> | null;
    not?: ModelUserLikeConditionInput | null;
    userLikeUserId?: ModelIDInput | null;
};

export type UserLike = {
    __typename: "UserLike";
    id: string;
    gameID?: string | null;
    user: User;
    isRemoved: boolean;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    userLikeUserId: string;
};

export type UpdateUserLikeInput = {
    id: string;
    gameID?: string | null;
    isRemoved?: boolean | null;
    _version?: number | null;
    userLikeUserId?: string | null;
};

export type DeleteUserLikeInput = {
    id: string;
    _version?: number | null;
};

export type CreateGameInput = {
    id?: string | null;
    password?: string | null;
    nsfw?: boolean | null;
    deleted?: boolean | null;
    _version?: number | null;
    gameHeadId?: string | null;
    gameTorsoId?: string | null;
    gameLegsId?: string | null;
};

export type ModelGameConditionInput = {
    password?: ModelStringInput | null;
    nsfw?: ModelBooleanInput | null;
    deleted?: ModelBooleanInput | null;
    and?: Array<ModelGameConditionInput | null> | null;
    or?: Array<ModelGameConditionInput | null> | null;
    not?: ModelGameConditionInput | null;
    gameHeadId?: ModelIDInput | null;
    gameTorsoId?: ModelIDInput | null;
    gameLegsId?: ModelIDInput | null;
};

export type UpdateGameInput = {
    id: string;
    password?: string | null;
    nsfw?: boolean | null;
    deleted?: boolean | null;
    _version?: number | null;
    gameHeadId?: string | null;
    gameTorsoId?: string | null;
    gameLegsId?: string | null;
};

export type DeleteGameInput = {
    id: string;
    _version?: number | null;
};

export type CreateUserInput = {
    id?: string | null;
    userName: string;
    friends: Array<string>;
    _version?: number | null;
};

export type ModelUserConditionInput = {
    userName?: ModelStringInput | null;
    friends?: ModelIDInput | null;
    and?: Array<ModelUserConditionInput | null> | null;
    or?: Array<ModelUserConditionInput | null> | null;
    not?: ModelUserConditionInput | null;
};

export type UpdateUserInput = {
    id: string;
    userName?: string | null;
    friends?: Array<string> | null;
    _version?: number | null;
};

export type DeleteUserInput = {
    id: string;
    _version?: number | null;
};

export type CreateDrawingInput = {
    id?: string | null;
    lines: string;
    isRemoved: boolean;
    isComplete: boolean;
    submittedAt: string;
    type?: DrawingType | null;
    _version?: number | null;
    drawingUserId?: string | null;
};

export type ModelDrawingConditionInput = {
    lines?: ModelStringInput | null;
    isRemoved?: ModelBooleanInput | null;
    isComplete?: ModelBooleanInput | null;
    submittedAt?: ModelStringInput | null;
    type?: ModelDrawingTypeInput | null;
    and?: Array<ModelDrawingConditionInput | null> | null;
    or?: Array<ModelDrawingConditionInput | null> | null;
    not?: ModelDrawingConditionInput | null;
    drawingUserId?: ModelIDInput | null;
};

export type UpdateDrawingInput = {
    id: string;
    lines?: string | null;
    isRemoved?: boolean | null;
    isComplete?: boolean | null;
    submittedAt?: string | null;
    type?: DrawingType | null;
    _version?: number | null;
    drawingUserId?: string | null;
};

export type DeleteDrawingInput = {
    id: string;
    _version?: number | null;
};

export type ModelUserReportFilterInput = {
    id?: ModelIDInput | null;
    isReviewed?: ModelBooleanInput | null;
    and?: Array<ModelUserReportFilterInput | null> | null;
    or?: Array<ModelUserReportFilterInput | null> | null;
    not?: ModelUserReportFilterInput | null;
    userReportTargetId?: ModelIDInput | null;
    userReportCreatedById?: ModelIDInput | null;
    userReportReviewedById?: ModelIDInput | null;
};

export type ModelUserReportConnection = {
    __typename: "ModelUserReportConnection";
    items: Array<UserReport | null>;
    nextToken?: string | null;
    startedAt?: number | null;
};

export type ModelErrorLogFilterInput = {
    id?: ModelIDInput | null;
    error?: ModelStringInput | null;
    and?: Array<ModelErrorLogFilterInput | null> | null;
    or?: Array<ModelErrorLogFilterInput | null> | null;
    not?: ModelErrorLogFilterInput | null;
    errorLogCreatedById?: ModelIDInput | null;
};

export type ModelErrorLogConnection = {
    __typename: "ModelErrorLogConnection";
    items: Array<ErrorLog | null>;
    nextToken?: string | null;
    startedAt?: number | null;
};

export type ModelDrawingTallyFilterInput = {
    id?: ModelIDInput | null;
    type?: ModelDrawingTypeInput | null;
    count?: ModelIntInput | null;
    and?: Array<ModelDrawingTallyFilterInput | null> | null;
    or?: Array<ModelDrawingTallyFilterInput | null> | null;
    not?: ModelDrawingTallyFilterInput | null;
};

export type ModelDrawingTallyConnection = {
    __typename: "ModelDrawingTallyConnection";
    items: Array<DrawingTally | null>;
    nextToken?: string | null;
    startedAt?: number | null;
};

export type ModelAuditLogFilterInput = {
    id?: ModelIDInput | null;
    targetID?: ModelIDInput | null;
    targetField?: ModelStringInput | null;
    oldValue?: ModelStringInput | null;
    newValue?: ModelStringInput | null;
    and?: Array<ModelAuditLogFilterInput | null> | null;
    or?: Array<ModelAuditLogFilterInput | null> | null;
    not?: ModelAuditLogFilterInput | null;
    auditLogChangedById?: ModelIDInput | null;
};

export type ModelAuditLogConnection = {
    __typename: "ModelAuditLogConnection";
    items: Array<AuditLog | null>;
    nextToken?: string | null;
    startedAt?: number | null;
};

export type ModelUserBanFilterInput = {
    id?: ModelIDInput | null;
    banLength?: ModelIntInput | null;
    isAppealed?: ModelBooleanInput | null;
    and?: Array<ModelUserBanFilterInput | null> | null;
    or?: Array<ModelUserBanFilterInput | null> | null;
    not?: ModelUserBanFilterInput | null;
    userBanCreatedById?: ModelIDInput | null;
    userBanTargetUserId?: ModelIDInput | null;
};

export type ModelUserBanConnection = {
    __typename: "ModelUserBanConnection";
    items: Array<UserBan | null>;
    nextToken?: string | null;
    startedAt?: number | null;
};

export type ModelUserLikeFilterInput = {
    id?: ModelIDInput | null;
    gameID?: ModelIDInput | null;
    isRemoved?: ModelBooleanInput | null;
    and?: Array<ModelUserLikeFilterInput | null> | null;
    or?: Array<ModelUserLikeFilterInput | null> | null;
    not?: ModelUserLikeFilterInput | null;
    userLikeUserId?: ModelIDInput | null;
};

export type ModelUserLikeConnection = {
    __typename: "ModelUserLikeConnection";
    items: Array<UserLike | null>;
    nextToken?: string | null;
    startedAt?: number | null;
};

export type ModelGameFilterInput = {
    id?: ModelIDInput | null;
    password?: ModelStringInput | null;
    nsfw?: ModelBooleanInput | null;
    deleted?: ModelBooleanInput | null;
    and?: Array<ModelGameFilterInput | null> | null;
    or?: Array<ModelGameFilterInput | null> | null;
    not?: ModelGameFilterInput | null;
    gameHeadId?: ModelIDInput | null;
    gameTorsoId?: ModelIDInput | null;
    gameLegsId?: ModelIDInput | null;
};

export type ModelGameConnection = {
    __typename: "ModelGameConnection";
    items: Array<Game | null>;
    nextToken?: string | null;
    startedAt?: number | null;
};

export type ModelUserFilterInput = {
    id?: ModelIDInput | null;
    userName?: ModelStringInput | null;
    friends?: ModelIDInput | null;
    and?: Array<ModelUserFilterInput | null> | null;
    or?: Array<ModelUserFilterInput | null> | null;
    not?: ModelUserFilterInput | null;
};

export type ModelUserConnection = {
    __typename: "ModelUserConnection";
    items: Array<User | null>;
    nextToken?: string | null;
    startedAt?: number | null;
};

export type ModelDrawingFilterInput = {
    id?: ModelIDInput | null;
    lines?: ModelStringInput | null;
    isRemoved?: ModelBooleanInput | null;
    isComplete?: ModelBooleanInput | null;
    submittedAt?: ModelStringInput | null;
    type?: ModelDrawingTypeInput | null;
    and?: Array<ModelDrawingFilterInput | null> | null;
    or?: Array<ModelDrawingFilterInput | null> | null;
    not?: ModelDrawingFilterInput | null;
    drawingUserId?: ModelIDInput | null;
};

export type ModelDrawingConnection = {
    __typename: "ModelDrawingConnection";
    items: Array<Drawing | null>;
    nextToken?: string | null;
    startedAt?: number | null;
};

export type CreateUserReportMutationVariables = {
    input: CreateUserReportInput;
    condition?: ModelUserReportConditionInput | null;
};

export type CreateUserReportMutation = {
    createUserReport?: {
        __typename: "UserReport";
        id: string;
        target?: {
            __typename: "Game";
            id: string;
            password?: string | null;
            nsfw?: boolean | null;
            deleted?: boolean | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            gameHeadId?: string | null;
            gameTorsoId?: string | null;
            gameLegsId?: string | null;
        } | null;
        createdBy?: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        } | null;
        isReviewed?: boolean | null;
        reviewedBy?: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        userReportTargetId?: string | null;
        userReportCreatedById?: string | null;
        userReportReviewedById?: string | null;
    } | null;
};

export type UpdateUserReportMutationVariables = {
    input: UpdateUserReportInput;
    condition?: ModelUserReportConditionInput | null;
};

export type UpdateUserReportMutation = {
    updateUserReport?: {
        __typename: "UserReport";
        id: string;
        target?: {
            __typename: "Game";
            id: string;
            password?: string | null;
            nsfw?: boolean | null;
            deleted?: boolean | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            gameHeadId?: string | null;
            gameTorsoId?: string | null;
            gameLegsId?: string | null;
        } | null;
        createdBy?: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        } | null;
        isReviewed?: boolean | null;
        reviewedBy?: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        userReportTargetId?: string | null;
        userReportCreatedById?: string | null;
        userReportReviewedById?: string | null;
    } | null;
};

export type DeleteUserReportMutationVariables = {
    input: DeleteUserReportInput;
    condition?: ModelUserReportConditionInput | null;
};

export type DeleteUserReportMutation = {
    deleteUserReport?: {
        __typename: "UserReport";
        id: string;
        target?: {
            __typename: "Game";
            id: string;
            password?: string | null;
            nsfw?: boolean | null;
            deleted?: boolean | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            gameHeadId?: string | null;
            gameTorsoId?: string | null;
            gameLegsId?: string | null;
        } | null;
        createdBy?: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        } | null;
        isReviewed?: boolean | null;
        reviewedBy?: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        userReportTargetId?: string | null;
        userReportCreatedById?: string | null;
        userReportReviewedById?: string | null;
    } | null;
};

export type CreateErrorLogMutationVariables = {
    input: CreateErrorLogInput;
    condition?: ModelErrorLogConditionInput | null;
};

export type CreateErrorLogMutation = {
    createErrorLog?: {
        __typename: "ErrorLog";
        id: string;
        createdBy: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        };
        error: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        errorLogCreatedById: string;
    } | null;
};

export type UpdateErrorLogMutationVariables = {
    input: UpdateErrorLogInput;
    condition?: ModelErrorLogConditionInput | null;
};

export type UpdateErrorLogMutation = {
    updateErrorLog?: {
        __typename: "ErrorLog";
        id: string;
        createdBy: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        };
        error: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        errorLogCreatedById: string;
    } | null;
};

export type DeleteErrorLogMutationVariables = {
    input: DeleteErrorLogInput;
    condition?: ModelErrorLogConditionInput | null;
};

export type DeleteErrorLogMutation = {
    deleteErrorLog?: {
        __typename: "ErrorLog";
        id: string;
        createdBy: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        };
        error: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        errorLogCreatedById: string;
    } | null;
};

export type CreateDrawingTallyMutationVariables = {
    input: CreateDrawingTallyInput;
    condition?: ModelDrawingTallyConditionInput | null;
};

export type CreateDrawingTallyMutation = {
    createDrawingTally?: {
        __typename: "DrawingTally";
        id: string;
        type?: DrawingType | null;
        count?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
    } | null;
};

export type UpdateDrawingTallyMutationVariables = {
    input: UpdateDrawingTallyInput;
    condition?: ModelDrawingTallyConditionInput | null;
};

export type UpdateDrawingTallyMutation = {
    updateDrawingTally?: {
        __typename: "DrawingTally";
        id: string;
        type?: DrawingType | null;
        count?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
    } | null;
};

export type DeleteDrawingTallyMutationVariables = {
    input: DeleteDrawingTallyInput;
    condition?: ModelDrawingTallyConditionInput | null;
};

export type DeleteDrawingTallyMutation = {
    deleteDrawingTally?: {
        __typename: "DrawingTally";
        id: string;
        type?: DrawingType | null;
        count?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
    } | null;
};

export type CreateAuditLogMutationVariables = {
    input: CreateAuditLogInput;
    condition?: ModelAuditLogConditionInput | null;
};

export type CreateAuditLogMutation = {
    createAuditLog?: {
        __typename: "AuditLog";
        id: string;
        targetID: string;
        targetField: string;
        oldValue: string;
        newValue: string;
        changedBy?: {
            __typename: "UserReport";
            id: string;
            isReviewed?: boolean | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            userReportTargetId?: string | null;
            userReportCreatedById?: string | null;
            userReportReviewedById?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        auditLogChangedById?: string | null;
    } | null;
};

export type UpdateAuditLogMutationVariables = {
    input: UpdateAuditLogInput;
    condition?: ModelAuditLogConditionInput | null;
};

export type UpdateAuditLogMutation = {
    updateAuditLog?: {
        __typename: "AuditLog";
        id: string;
        targetID: string;
        targetField: string;
        oldValue: string;
        newValue: string;
        changedBy?: {
            __typename: "UserReport";
            id: string;
            isReviewed?: boolean | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            userReportTargetId?: string | null;
            userReportCreatedById?: string | null;
            userReportReviewedById?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        auditLogChangedById?: string | null;
    } | null;
};

export type DeleteAuditLogMutationVariables = {
    input: DeleteAuditLogInput;
    condition?: ModelAuditLogConditionInput | null;
};

export type DeleteAuditLogMutation = {
    deleteAuditLog?: {
        __typename: "AuditLog";
        id: string;
        targetID: string;
        targetField: string;
        oldValue: string;
        newValue: string;
        changedBy?: {
            __typename: "UserReport";
            id: string;
            isReviewed?: boolean | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            userReportTargetId?: string | null;
            userReportCreatedById?: string | null;
            userReportReviewedById?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        auditLogChangedById?: string | null;
    } | null;
};

export type CreateUserBanMutationVariables = {
    input: CreateUserBanInput;
    condition?: ModelUserBanConditionInput | null;
};

export type CreateUserBanMutation = {
    createUserBan?: {
        __typename: "UserBan";
        id: string;
        banLength: number;
        CreatedBy: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        };
        TargetUser: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        };
        isAppealed: boolean;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        userBanCreatedById: string;
        userBanTargetUserId: string;
    } | null;
};

export type UpdateUserBanMutationVariables = {
    input: UpdateUserBanInput;
    condition?: ModelUserBanConditionInput | null;
};

export type UpdateUserBanMutation = {
    updateUserBan?: {
        __typename: "UserBan";
        id: string;
        banLength: number;
        CreatedBy: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        };
        TargetUser: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        };
        isAppealed: boolean;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        userBanCreatedById: string;
        userBanTargetUserId: string;
    } | null;
};

export type DeleteUserBanMutationVariables = {
    input: DeleteUserBanInput;
    condition?: ModelUserBanConditionInput | null;
};

export type DeleteUserBanMutation = {
    deleteUserBan?: {
        __typename: "UserBan";
        id: string;
        banLength: number;
        CreatedBy: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        };
        TargetUser: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        };
        isAppealed: boolean;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        userBanCreatedById: string;
        userBanTargetUserId: string;
    } | null;
};

export type CreateUserLikeMutationVariables = {
    input: CreateUserLikeInput;
    condition?: ModelUserLikeConditionInput | null;
};

export type CreateUserLikeMutation = {
    createUserLike?: {
        __typename: "UserLike";
        id: string;
        gameID?: string | null;
        user: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        };
        isRemoved: boolean;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        userLikeUserId: string;
    } | null;
};

export type UpdateUserLikeMutationVariables = {
    input: UpdateUserLikeInput;
    condition?: ModelUserLikeConditionInput | null;
};

export type UpdateUserLikeMutation = {
    updateUserLike?: {
        __typename: "UserLike";
        id: string;
        gameID?: string | null;
        user: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        };
        isRemoved: boolean;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        userLikeUserId: string;
    } | null;
};

export type DeleteUserLikeMutationVariables = {
    input: DeleteUserLikeInput;
    condition?: ModelUserLikeConditionInput | null;
};

export type DeleteUserLikeMutation = {
    deleteUserLike?: {
        __typename: "UserLike";
        id: string;
        gameID?: string | null;
        user: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        };
        isRemoved: boolean;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        userLikeUserId: string;
    } | null;
};

export type CreateGameMutationVariables = {
    input: CreateGameInput;
    condition?: ModelGameConditionInput | null;
};

export type CreateGameMutation = {
    createGame?: {
        __typename: "Game";
        id: string;
        password?: string | null;
        nsfw?: boolean | null;
        head?: {
            __typename: "Drawing";
            id: string;
            lines: string;
            isRemoved: boolean;
            isComplete: boolean;
            submittedAt: string;
            type?: DrawingType | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            drawingUserId?: string | null;
        } | null;
        torso?: {
            __typename: "Drawing";
            id: string;
            lines: string;
            isRemoved: boolean;
            isComplete: boolean;
            submittedAt: string;
            type?: DrawingType | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            drawingUserId?: string | null;
        } | null;
        legs?: {
            __typename: "Drawing";
            id: string;
            lines: string;
            isRemoved: boolean;
            isComplete: boolean;
            submittedAt: string;
            type?: DrawingType | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            drawingUserId?: string | null;
        } | null;
        deleted?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        gameHeadId?: string | null;
        gameTorsoId?: string | null;
        gameLegsId?: string | null;
    } | null;
};

export type UpdateGameMutationVariables = {
    input: UpdateGameInput;
    condition?: ModelGameConditionInput | null;
};

export type UpdateGameMutation = {
    updateGame?: {
        __typename: "Game";
        id: string;
        password?: string | null;
        nsfw?: boolean | null;
        head?: {
            __typename: "Drawing";
            id: string;
            lines: string;
            isRemoved: boolean;
            isComplete: boolean;
            submittedAt: string;
            type?: DrawingType | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            drawingUserId?: string | null;
        } | null;
        torso?: {
            __typename: "Drawing";
            id: string;
            lines: string;
            isRemoved: boolean;
            isComplete: boolean;
            submittedAt: string;
            type?: DrawingType | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            drawingUserId?: string | null;
        } | null;
        legs?: {
            __typename: "Drawing";
            id: string;
            lines: string;
            isRemoved: boolean;
            isComplete: boolean;
            submittedAt: string;
            type?: DrawingType | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            drawingUserId?: string | null;
        } | null;
        deleted?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        gameHeadId?: string | null;
        gameTorsoId?: string | null;
        gameLegsId?: string | null;
    } | null;
};

export type DeleteGameMutationVariables = {
    input: DeleteGameInput;
    condition?: ModelGameConditionInput | null;
};

export type DeleteGameMutation = {
    deleteGame?: {
        __typename: "Game";
        id: string;
        password?: string | null;
        nsfw?: boolean | null;
        head?: {
            __typename: "Drawing";
            id: string;
            lines: string;
            isRemoved: boolean;
            isComplete: boolean;
            submittedAt: string;
            type?: DrawingType | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            drawingUserId?: string | null;
        } | null;
        torso?: {
            __typename: "Drawing";
            id: string;
            lines: string;
            isRemoved: boolean;
            isComplete: boolean;
            submittedAt: string;
            type?: DrawingType | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            drawingUserId?: string | null;
        } | null;
        legs?: {
            __typename: "Drawing";
            id: string;
            lines: string;
            isRemoved: boolean;
            isComplete: boolean;
            submittedAt: string;
            type?: DrawingType | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            drawingUserId?: string | null;
        } | null;
        deleted?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        gameHeadId?: string | null;
        gameTorsoId?: string | null;
        gameLegsId?: string | null;
    } | null;
};

export type CreateUserMutationVariables = {
    input: CreateUserInput;
    condition?: ModelUserConditionInput | null;
};

export type CreateUserMutation = {
    createUser?: {
        __typename: "User";
        id: string;
        userName: string;
        friends: Array<string>;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
    } | null;
};

export type UpdateUserMutationVariables = {
    input: UpdateUserInput;
    condition?: ModelUserConditionInput | null;
};

export type UpdateUserMutation = {
    updateUser?: {
        __typename: "User";
        id: string;
        userName: string;
        friends: Array<string>;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
    } | null;
};

export type DeleteUserMutationVariables = {
    input: DeleteUserInput;
    condition?: ModelUserConditionInput | null;
};

export type DeleteUserMutation = {
    deleteUser?: {
        __typename: "User";
        id: string;
        userName: string;
        friends: Array<string>;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
    } | null;
};

export type CreateDrawingMutationVariables = {
    input: CreateDrawingInput;
    condition?: ModelDrawingConditionInput | null;
};

export type CreateDrawingMutation = {
    createDrawing?: {
        __typename: "Drawing";
        id: string;
        User?: {
            __typename: "UserReport";
            id: string;
            isReviewed?: boolean | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            userReportTargetId?: string | null;
            userReportCreatedById?: string | null;
            userReportReviewedById?: string | null;
        } | null;
        lines: string;
        isRemoved: boolean;
        isComplete: boolean;
        submittedAt: string;
        type?: DrawingType | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        drawingUserId?: string | null;
    } | null;
};

export type UpdateDrawingMutationVariables = {
    input: UpdateDrawingInput;
    condition?: ModelDrawingConditionInput | null;
};

export type UpdateDrawingMutation = {
    updateDrawing?: {
        __typename: "Drawing";
        id: string;
        User?: {
            __typename: "UserReport";
            id: string;
            isReviewed?: boolean | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            userReportTargetId?: string | null;
            userReportCreatedById?: string | null;
            userReportReviewedById?: string | null;
        } | null;
        lines: string;
        isRemoved: boolean;
        isComplete: boolean;
        submittedAt: string;
        type?: DrawingType | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        drawingUserId?: string | null;
    } | null;
};

export type DeleteDrawingMutationVariables = {
    input: DeleteDrawingInput;
    condition?: ModelDrawingConditionInput | null;
};

export type DeleteDrawingMutation = {
    deleteDrawing?: {
        __typename: "Drawing";
        id: string;
        User?: {
            __typename: "UserReport";
            id: string;
            isReviewed?: boolean | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            userReportTargetId?: string | null;
            userReportCreatedById?: string | null;
            userReportReviewedById?: string | null;
        } | null;
        lines: string;
        isRemoved: boolean;
        isComplete: boolean;
        submittedAt: string;
        type?: DrawingType | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        drawingUserId?: string | null;
    } | null;
};

export type GetUserReportQueryVariables = {
    id: string;
};

export type GetUserReportQuery = {
    getUserReport?: {
        __typename: "UserReport";
        id: string;
        target?: {
            __typename: "Game";
            id: string;
            password?: string | null;
            nsfw?: boolean | null;
            deleted?: boolean | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            gameHeadId?: string | null;
            gameTorsoId?: string | null;
            gameLegsId?: string | null;
        } | null;
        createdBy?: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        } | null;
        isReviewed?: boolean | null;
        reviewedBy?: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        userReportTargetId?: string | null;
        userReportCreatedById?: string | null;
        userReportReviewedById?: string | null;
    } | null;
};

export type ListUserReportsQueryVariables = {
    filter?: ModelUserReportFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListUserReportsQuery = {
    listUserReports?: {
        __typename: "ModelUserReportConnection";
        items: Array<{
            __typename: "UserReport";
            id: string;
            isReviewed?: boolean | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            userReportTargetId?: string | null;
            userReportCreatedById?: string | null;
            userReportReviewedById?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
    } | null;
};

export type SyncUserReportsQueryVariables = {
    filter?: ModelUserReportFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
    lastSync?: number | null;
};

export type SyncUserReportsQuery = {
    syncUserReports?: {
        __typename: "ModelUserReportConnection";
        items: Array<{
            __typename: "UserReport";
            id: string;
            isReviewed?: boolean | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            userReportTargetId?: string | null;
            userReportCreatedById?: string | null;
            userReportReviewedById?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
    } | null;
};

export type GetErrorLogQueryVariables = {
    id: string;
};

export type GetErrorLogQuery = {
    getErrorLog?: {
        __typename: "ErrorLog";
        id: string;
        createdBy: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        };
        error: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        errorLogCreatedById: string;
    } | null;
};

export type ListErrorLogsQueryVariables = {
    filter?: ModelErrorLogFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListErrorLogsQuery = {
    listErrorLogs?: {
        __typename: "ModelErrorLogConnection";
        items: Array<{
            __typename: "ErrorLog";
            id: string;
            error: string;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            errorLogCreatedById: string;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
    } | null;
};

export type SyncErrorLogsQueryVariables = {
    filter?: ModelErrorLogFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
    lastSync?: number | null;
};

export type SyncErrorLogsQuery = {
    syncErrorLogs?: {
        __typename: "ModelErrorLogConnection";
        items: Array<{
            __typename: "ErrorLog";
            id: string;
            error: string;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            errorLogCreatedById: string;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
    } | null;
};

export type GetDrawingTallyQueryVariables = {
    id: string;
};

export type GetDrawingTallyQuery = {
    getDrawingTally?: {
        __typename: "DrawingTally";
        id: string;
        type?: DrawingType | null;
        count?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
    } | null;
};

export type ListDrawingTalliesQueryVariables = {
    filter?: ModelDrawingTallyFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListDrawingTalliesQuery = {
    listDrawingTallies?: {
        __typename: "ModelDrawingTallyConnection";
        items: Array<{
            __typename: "DrawingTally";
            id: string;
            type?: DrawingType | null;
            count?: number | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
    } | null;
};

export type SyncDrawingTalliesQueryVariables = {
    filter?: ModelDrawingTallyFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
    lastSync?: number | null;
};

export type SyncDrawingTalliesQuery = {
    syncDrawingTallies?: {
        __typename: "ModelDrawingTallyConnection";
        items: Array<{
            __typename: "DrawingTally";
            id: string;
            type?: DrawingType | null;
            count?: number | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
    } | null;
};

export type GetAuditLogQueryVariables = {
    id: string;
};

export type GetAuditLogQuery = {
    getAuditLog?: {
        __typename: "AuditLog";
        id: string;
        targetID: string;
        targetField: string;
        oldValue: string;
        newValue: string;
        changedBy?: {
            __typename: "UserReport";
            id: string;
            isReviewed?: boolean | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            userReportTargetId?: string | null;
            userReportCreatedById?: string | null;
            userReportReviewedById?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        auditLogChangedById?: string | null;
    } | null;
};

export type ListAuditLogsQueryVariables = {
    filter?: ModelAuditLogFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListAuditLogsQuery = {
    listAuditLogs?: {
        __typename: "ModelAuditLogConnection";
        items: Array<{
            __typename: "AuditLog";
            id: string;
            targetID: string;
            targetField: string;
            oldValue: string;
            newValue: string;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            auditLogChangedById?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
    } | null;
};

export type SyncAuditLogsQueryVariables = {
    filter?: ModelAuditLogFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
    lastSync?: number | null;
};

export type SyncAuditLogsQuery = {
    syncAuditLogs?: {
        __typename: "ModelAuditLogConnection";
        items: Array<{
            __typename: "AuditLog";
            id: string;
            targetID: string;
            targetField: string;
            oldValue: string;
            newValue: string;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            auditLogChangedById?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
    } | null;
};

export type GetUserBanQueryVariables = {
    id: string;
};

export type GetUserBanQuery = {
    getUserBan?: {
        __typename: "UserBan";
        id: string;
        banLength: number;
        CreatedBy: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        };
        TargetUser: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        };
        isAppealed: boolean;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        userBanCreatedById: string;
        userBanTargetUserId: string;
    } | null;
};

export type ListUserBansQueryVariables = {
    filter?: ModelUserBanFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListUserBansQuery = {
    listUserBans?: {
        __typename: "ModelUserBanConnection";
        items: Array<{
            __typename: "UserBan";
            id: string;
            banLength: number;
            isAppealed: boolean;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            userBanCreatedById: string;
            userBanTargetUserId: string;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
    } | null;
};

export type SyncUserBansQueryVariables = {
    filter?: ModelUserBanFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
    lastSync?: number | null;
};

export type SyncUserBansQuery = {
    syncUserBans?: {
        __typename: "ModelUserBanConnection";
        items: Array<{
            __typename: "UserBan";
            id: string;
            banLength: number;
            isAppealed: boolean;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            userBanCreatedById: string;
            userBanTargetUserId: string;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
    } | null;
};

export type GetUserLikeQueryVariables = {
    id: string;
};

export type GetUserLikeQuery = {
    getUserLike?: {
        __typename: "UserLike";
        id: string;
        gameID?: string | null;
        user: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        };
        isRemoved: boolean;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        userLikeUserId: string;
    } | null;
};

export type ListUserLikesQueryVariables = {
    filter?: ModelUserLikeFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListUserLikesQuery = {
    listUserLikes?: {
        __typename: "ModelUserLikeConnection";
        items: Array<{
            __typename: "UserLike";
            id: string;
            gameID?: string | null;
            isRemoved: boolean;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            userLikeUserId: string;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
    } | null;
};

export type SyncUserLikesQueryVariables = {
    filter?: ModelUserLikeFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
    lastSync?: number | null;
};

export type SyncUserLikesQuery = {
    syncUserLikes?: {
        __typename: "ModelUserLikeConnection";
        items: Array<{
            __typename: "UserLike";
            id: string;
            gameID?: string | null;
            isRemoved: boolean;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            userLikeUserId: string;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
    } | null;
};

export type GetGameQueryVariables = {
    id: string;
};

export type GetGameQuery = {
    getGame?: {
        __typename: "Game";
        id: string;
        password?: string | null;
        nsfw?: boolean | null;
        head?: {
            __typename: "Drawing";
            id: string;
            lines: string;
            isRemoved: boolean;
            isComplete: boolean;
            submittedAt: string;
            type?: DrawingType | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            drawingUserId?: string | null;
        } | null;
        torso?: {
            __typename: "Drawing";
            id: string;
            lines: string;
            isRemoved: boolean;
            isComplete: boolean;
            submittedAt: string;
            type?: DrawingType | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            drawingUserId?: string | null;
        } | null;
        legs?: {
            __typename: "Drawing";
            id: string;
            lines: string;
            isRemoved: boolean;
            isComplete: boolean;
            submittedAt: string;
            type?: DrawingType | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            drawingUserId?: string | null;
        } | null;
        deleted?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        gameHeadId?: string | null;
        gameTorsoId?: string | null;
        gameLegsId?: string | null;
    } | null;
};

export type ListGamesQueryVariables = {
    filter?: ModelGameFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListGamesQuery = {
    listGames?: {
        __typename: "ModelGameConnection";
        items: Array<{
            __typename: "Game";
            id: string;
            password?: string | null;
            nsfw?: boolean | null;
            deleted?: boolean | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            gameHeadId?: string | null;
            gameTorsoId?: string | null;
            gameLegsId?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
    } | null;
};

export type SyncGamesQueryVariables = {
    filter?: ModelGameFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
    lastSync?: number | null;
};

export type SyncGamesQuery = {
    syncGames?: {
        __typename: "ModelGameConnection";
        items: Array<{
            __typename: "Game";
            id: string;
            password?: string | null;
            nsfw?: boolean | null;
            deleted?: boolean | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            gameHeadId?: string | null;
            gameTorsoId?: string | null;
            gameLegsId?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
    } | null;
};

export type GetUserQueryVariables = {
    id: string;
};

export type GetUserQuery = {
    getUser?: {
        __typename: "User";
        id: string;
        userName: string;
        friends: Array<string>;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
    } | null;
};

export type ListUsersQueryVariables = {
    filter?: ModelUserFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListUsersQuery = {
    listUsers?: {
        __typename: "ModelUserConnection";
        items: Array<{
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
    } | null;
};

export type SyncUsersQueryVariables = {
    filter?: ModelUserFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
    lastSync?: number | null;
};

export type SyncUsersQuery = {
    syncUsers?: {
        __typename: "ModelUserConnection";
        items: Array<{
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
    } | null;
};

export type GetDrawingQueryVariables = {
    id: string;
};

export type GetDrawingQuery = {
    getDrawing?: {
        __typename: "Drawing";
        id: string;
        User?: {
            __typename: "UserReport";
            id: string;
            isReviewed?: boolean | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            userReportTargetId?: string | null;
            userReportCreatedById?: string | null;
            userReportReviewedById?: string | null;
        } | null;
        lines: string;
        isRemoved: boolean;
        isComplete: boolean;
        submittedAt: string;
        type?: DrawingType | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        drawingUserId?: string | null;
    } | null;
};

export type ListDrawingsQueryVariables = {
    filter?: ModelDrawingFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListDrawingsQuery = {
    listDrawings?: {
        __typename: "ModelDrawingConnection";
        items: Array<{
            __typename: "Drawing";
            id: string;
            lines: string;
            isRemoved: boolean;
            isComplete: boolean;
            submittedAt: string;
            type?: DrawingType | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            drawingUserId?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
    } | null;
};

export type SyncDrawingsQueryVariables = {
    filter?: ModelDrawingFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
    lastSync?: number | null;
};

export type SyncDrawingsQuery = {
    syncDrawings?: {
        __typename: "ModelDrawingConnection";
        items: Array<{
            __typename: "Drawing";
            id: string;
            lines: string;
            isRemoved: boolean;
            isComplete: boolean;
            submittedAt: string;
            type?: DrawingType | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            drawingUserId?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
    } | null;
};

export type OnCreateUserReportSubscription = {
    onCreateUserReport?: {
        __typename: "UserReport";
        id: string;
        target?: {
            __typename: "Game";
            id: string;
            password?: string | null;
            nsfw?: boolean | null;
            deleted?: boolean | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            gameHeadId?: string | null;
            gameTorsoId?: string | null;
            gameLegsId?: string | null;
        } | null;
        createdBy?: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        } | null;
        isReviewed?: boolean | null;
        reviewedBy?: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        userReportTargetId?: string | null;
        userReportCreatedById?: string | null;
        userReportReviewedById?: string | null;
    } | null;
};

export type OnUpdateUserReportSubscription = {
    onUpdateUserReport?: {
        __typename: "UserReport";
        id: string;
        target?: {
            __typename: "Game";
            id: string;
            password?: string | null;
            nsfw?: boolean | null;
            deleted?: boolean | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            gameHeadId?: string | null;
            gameTorsoId?: string | null;
            gameLegsId?: string | null;
        } | null;
        createdBy?: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        } | null;
        isReviewed?: boolean | null;
        reviewedBy?: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        userReportTargetId?: string | null;
        userReportCreatedById?: string | null;
        userReportReviewedById?: string | null;
    } | null;
};

export type OnDeleteUserReportSubscription = {
    onDeleteUserReport?: {
        __typename: "UserReport";
        id: string;
        target?: {
            __typename: "Game";
            id: string;
            password?: string | null;
            nsfw?: boolean | null;
            deleted?: boolean | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            gameHeadId?: string | null;
            gameTorsoId?: string | null;
            gameLegsId?: string | null;
        } | null;
        createdBy?: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        } | null;
        isReviewed?: boolean | null;
        reviewedBy?: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        userReportTargetId?: string | null;
        userReportCreatedById?: string | null;
        userReportReviewedById?: string | null;
    } | null;
};

export type OnCreateErrorLogSubscription = {
    onCreateErrorLog?: {
        __typename: "ErrorLog";
        id: string;
        createdBy: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        };
        error: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        errorLogCreatedById: string;
    } | null;
};

export type OnUpdateErrorLogSubscription = {
    onUpdateErrorLog?: {
        __typename: "ErrorLog";
        id: string;
        createdBy: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        };
        error: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        errorLogCreatedById: string;
    } | null;
};

export type OnDeleteErrorLogSubscription = {
    onDeleteErrorLog?: {
        __typename: "ErrorLog";
        id: string;
        createdBy: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        };
        error: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        errorLogCreatedById: string;
    } | null;
};

export type OnCreateDrawingTallySubscription = {
    onCreateDrawingTally?: {
        __typename: "DrawingTally";
        id: string;
        type?: DrawingType | null;
        count?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
    } | null;
};

export type OnUpdateDrawingTallySubscription = {
    onUpdateDrawingTally?: {
        __typename: "DrawingTally";
        id: string;
        type?: DrawingType | null;
        count?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
    } | null;
};

export type OnDeleteDrawingTallySubscription = {
    onDeleteDrawingTally?: {
        __typename: "DrawingTally";
        id: string;
        type?: DrawingType | null;
        count?: number | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
    } | null;
};

export type OnCreateAuditLogSubscription = {
    onCreateAuditLog?: {
        __typename: "AuditLog";
        id: string;
        targetID: string;
        targetField: string;
        oldValue: string;
        newValue: string;
        changedBy?: {
            __typename: "UserReport";
            id: string;
            isReviewed?: boolean | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            userReportTargetId?: string | null;
            userReportCreatedById?: string | null;
            userReportReviewedById?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        auditLogChangedById?: string | null;
    } | null;
};

export type OnUpdateAuditLogSubscription = {
    onUpdateAuditLog?: {
        __typename: "AuditLog";
        id: string;
        targetID: string;
        targetField: string;
        oldValue: string;
        newValue: string;
        changedBy?: {
            __typename: "UserReport";
            id: string;
            isReviewed?: boolean | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            userReportTargetId?: string | null;
            userReportCreatedById?: string | null;
            userReportReviewedById?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        auditLogChangedById?: string | null;
    } | null;
};

export type OnDeleteAuditLogSubscription = {
    onDeleteAuditLog?: {
        __typename: "AuditLog";
        id: string;
        targetID: string;
        targetField: string;
        oldValue: string;
        newValue: string;
        changedBy?: {
            __typename: "UserReport";
            id: string;
            isReviewed?: boolean | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            userReportTargetId?: string | null;
            userReportCreatedById?: string | null;
            userReportReviewedById?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        auditLogChangedById?: string | null;
    } | null;
};

export type OnCreateUserBanSubscription = {
    onCreateUserBan?: {
        __typename: "UserBan";
        id: string;
        banLength: number;
        CreatedBy: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        };
        TargetUser: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        };
        isAppealed: boolean;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        userBanCreatedById: string;
        userBanTargetUserId: string;
    } | null;
};

export type OnUpdateUserBanSubscription = {
    onUpdateUserBan?: {
        __typename: "UserBan";
        id: string;
        banLength: number;
        CreatedBy: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        };
        TargetUser: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        };
        isAppealed: boolean;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        userBanCreatedById: string;
        userBanTargetUserId: string;
    } | null;
};

export type OnDeleteUserBanSubscription = {
    onDeleteUserBan?: {
        __typename: "UserBan";
        id: string;
        banLength: number;
        CreatedBy: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        };
        TargetUser: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        };
        isAppealed: boolean;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        userBanCreatedById: string;
        userBanTargetUserId: string;
    } | null;
};

export type OnCreateUserLikeSubscription = {
    onCreateUserLike?: {
        __typename: "UserLike";
        id: string;
        gameID?: string | null;
        user: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        };
        isRemoved: boolean;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        userLikeUserId: string;
    } | null;
};

export type OnUpdateUserLikeSubscription = {
    onUpdateUserLike?: {
        __typename: "UserLike";
        id: string;
        gameID?: string | null;
        user: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        };
        isRemoved: boolean;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        userLikeUserId: string;
    } | null;
};

export type OnDeleteUserLikeSubscription = {
    onDeleteUserLike?: {
        __typename: "UserLike";
        id: string;
        gameID?: string | null;
        user: {
            __typename: "User";
            id: string;
            userName: string;
            friends: Array<string>;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
        };
        isRemoved: boolean;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        userLikeUserId: string;
    } | null;
};

export type OnCreateGameSubscription = {
    onCreateGame?: {
        __typename: "Game";
        id: string;
        password?: string | null;
        nsfw?: boolean | null;
        head?: {
            __typename: "Drawing";
            id: string;
            lines: string;
            isRemoved: boolean;
            isComplete: boolean;
            submittedAt: string;
            type?: DrawingType | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            drawingUserId?: string | null;
        } | null;
        torso?: {
            __typename: "Drawing";
            id: string;
            lines: string;
            isRemoved: boolean;
            isComplete: boolean;
            submittedAt: string;
            type?: DrawingType | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            drawingUserId?: string | null;
        } | null;
        legs?: {
            __typename: "Drawing";
            id: string;
            lines: string;
            isRemoved: boolean;
            isComplete: boolean;
            submittedAt: string;
            type?: DrawingType | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            drawingUserId?: string | null;
        } | null;
        deleted?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        gameHeadId?: string | null;
        gameTorsoId?: string | null;
        gameLegsId?: string | null;
    } | null;
};

export type OnUpdateGameSubscription = {
    onUpdateGame?: {
        __typename: "Game";
        id: string;
        password?: string | null;
        nsfw?: boolean | null;
        head?: {
            __typename: "Drawing";
            id: string;
            lines: string;
            isRemoved: boolean;
            isComplete: boolean;
            submittedAt: string;
            type?: DrawingType | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            drawingUserId?: string | null;
        } | null;
        torso?: {
            __typename: "Drawing";
            id: string;
            lines: string;
            isRemoved: boolean;
            isComplete: boolean;
            submittedAt: string;
            type?: DrawingType | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            drawingUserId?: string | null;
        } | null;
        legs?: {
            __typename: "Drawing";
            id: string;
            lines: string;
            isRemoved: boolean;
            isComplete: boolean;
            submittedAt: string;
            type?: DrawingType | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            drawingUserId?: string | null;
        } | null;
        deleted?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        gameHeadId?: string | null;
        gameTorsoId?: string | null;
        gameLegsId?: string | null;
    } | null;
};

export type OnDeleteGameSubscription = {
    onDeleteGame?: {
        __typename: "Game";
        id: string;
        password?: string | null;
        nsfw?: boolean | null;
        head?: {
            __typename: "Drawing";
            id: string;
            lines: string;
            isRemoved: boolean;
            isComplete: boolean;
            submittedAt: string;
            type?: DrawingType | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            drawingUserId?: string | null;
        } | null;
        torso?: {
            __typename: "Drawing";
            id: string;
            lines: string;
            isRemoved: boolean;
            isComplete: boolean;
            submittedAt: string;
            type?: DrawingType | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            drawingUserId?: string | null;
        } | null;
        legs?: {
            __typename: "Drawing";
            id: string;
            lines: string;
            isRemoved: boolean;
            isComplete: boolean;
            submittedAt: string;
            type?: DrawingType | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            drawingUserId?: string | null;
        } | null;
        deleted?: boolean | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        gameHeadId?: string | null;
        gameTorsoId?: string | null;
        gameLegsId?: string | null;
    } | null;
};

export type OnCreateUserSubscription = {
    onCreateUser?: {
        __typename: "User";
        id: string;
        userName: string;
        friends: Array<string>;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
    } | null;
};

export type OnUpdateUserSubscription = {
    onUpdateUser?: {
        __typename: "User";
        id: string;
        userName: string;
        friends: Array<string>;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
    } | null;
};

export type OnDeleteUserSubscription = {
    onDeleteUser?: {
        __typename: "User";
        id: string;
        userName: string;
        friends: Array<string>;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
    } | null;
};

export type OnCreateDrawingSubscription = {
    onCreateDrawing?: {
        __typename: "Drawing";
        id: string;
        User?: {
            __typename: "UserReport";
            id: string;
            isReviewed?: boolean | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            userReportTargetId?: string | null;
            userReportCreatedById?: string | null;
            userReportReviewedById?: string | null;
        } | null;
        lines: string;
        isRemoved: boolean;
        isComplete: boolean;
        submittedAt: string;
        type?: DrawingType | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        drawingUserId?: string | null;
    } | null;
};

export type OnUpdateDrawingSubscription = {
    onUpdateDrawing?: {
        __typename: "Drawing";
        id: string;
        User?: {
            __typename: "UserReport";
            id: string;
            isReviewed?: boolean | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            userReportTargetId?: string | null;
            userReportCreatedById?: string | null;
            userReportReviewedById?: string | null;
        } | null;
        lines: string;
        isRemoved: boolean;
        isComplete: boolean;
        submittedAt: string;
        type?: DrawingType | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        drawingUserId?: string | null;
    } | null;
};

export type OnDeleteDrawingSubscription = {
    onDeleteDrawing?: {
        __typename: "Drawing";
        id: string;
        User?: {
            __typename: "UserReport";
            id: string;
            isReviewed?: boolean | null;
            createdAt: string;
            updatedAt: string;
            _version: number;
            _deleted?: boolean | null;
            _lastChangedAt: number;
            userReportTargetId?: string | null;
            userReportCreatedById?: string | null;
            userReportReviewedById?: string | null;
        } | null;
        lines: string;
        isRemoved: boolean;
        isComplete: boolean;
        submittedAt: string;
        type?: DrawingType | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        drawingUserId?: string | null;
    } | null;
};

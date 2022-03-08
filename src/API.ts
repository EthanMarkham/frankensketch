/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserReportInput = {
  id?: string | null,
  isReviewed?: boolean | null,
  reportedBy?: string | null,
  gameID: string,
  _version?: number | null,
};

export type ModelUserReportConditionInput = {
  isReviewed?: ModelBooleanInput | null,
  reportedBy?: ModelStringInput | null,
  gameID?: ModelIDInput | null,
  and?: Array< ModelUserReportConditionInput | null > | null,
  or?: Array< ModelUserReportConditionInput | null > | null,
  not?: ModelUserReportConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
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


export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UserReport = {
  __typename: "UserReport",
  id: string,
  isReviewed?: boolean | null,
  reportedBy?: string | null,
  gameID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateUserReportInput = {
  id: string,
  isReviewed?: boolean | null,
  reportedBy?: string | null,
  gameID?: string | null,
  _version?: number | null,
};

export type DeleteUserReportInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserLikeInput = {
  id?: string | null,
  user?: string | null,
  gameID: string,
  _version?: number | null,
};

export type ModelUserLikeConditionInput = {
  user?: ModelStringInput | null,
  gameID?: ModelIDInput | null,
  and?: Array< ModelUserLikeConditionInput | null > | null,
  or?: Array< ModelUserLikeConditionInput | null > | null,
  not?: ModelUserLikeConditionInput | null,
};

export type UserLike = {
  __typename: "UserLike",
  id: string,
  user?: string | null,
  gameID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateUserLikeInput = {
  id: string,
  user?: string | null,
  gameID?: string | null,
  _version?: number | null,
};

export type DeleteUserLikeInput = {
  id: string,
  _version?: number | null,
};

export type CreateDrawingTallyInput = {
  id?: string | null,
  count?: number | null,
  _version?: number | null,
};

export type ModelDrawingTallyConditionInput = {
  count?: ModelIntInput | null,
  and?: Array< ModelDrawingTallyConditionInput | null > | null,
  or?: Array< ModelDrawingTallyConditionInput | null > | null,
  not?: ModelDrawingTallyConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type DrawingTally = {
  __typename: "DrawingTally",
  id: string,
  count?: number | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateDrawingTallyInput = {
  id: string,
  count?: number | null,
  _version?: number | null,
};

export type DeleteDrawingTallyInput = {
  id: string,
  _version?: number | null,
};

export type CreateGameInput = {
  id?: string | null,
  password?: string | null,
  nsfw?: boolean | null,
  _version?: number | null,
  gameHeadId?: string | null,
  gameTorsoId?: string | null,
  gameLegsId?: string | null,
};

export type ModelGameConditionInput = {
  password?: ModelStringInput | null,
  nsfw?: ModelBooleanInput | null,
  and?: Array< ModelGameConditionInput | null > | null,
  or?: Array< ModelGameConditionInput | null > | null,
  not?: ModelGameConditionInput | null,
  gameHeadId?: ModelIDInput | null,
  gameTorsoId?: ModelIDInput | null,
  gameLegsId?: ModelIDInput | null,
};

export type Game = {
  __typename: "Game",
  id: string,
  password?: string | null,
  nsfw?: boolean | null,
  head?: Drawing | null,
  torso?: Drawing | null,
  legs?: Drawing | null,
  UserReports?: ModelUserReportConnection | null,
  UserLikes?: ModelUserLikeConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  gameHeadId?: string | null,
  gameTorsoId?: string | null,
  gameLegsId?: string | null,
};

export type Drawing = {
  __typename: "Drawing",
  id: string,
  lines?: Array< string > | null,
  isRemoved: boolean,
  isComplete: boolean,
  type?: string | null,
  artist: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelUserReportConnection = {
  __typename: "ModelUserReportConnection",
  items:  Array<UserReport | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserLikeConnection = {
  __typename: "ModelUserLikeConnection",
  items:  Array<UserLike | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateGameInput = {
  id: string,
  password?: string | null,
  nsfw?: boolean | null,
  _version?: number | null,
  gameHeadId?: string | null,
  gameTorsoId?: string | null,
  gameLegsId?: string | null,
};

export type DeleteGameInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  userName: string,
  friends?: Array< string > | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  userName?: ModelStringInput | null,
  friends?: ModelIDInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  userName: string,
  friends?: Array< string > | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateUserInput = {
  id: string,
  userName?: string | null,
  friends?: Array< string > | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateDrawingInput = {
  id?: string | null,
  lines?: Array< string > | null,
  isRemoved: boolean,
  isComplete: boolean,
  type?: string | null,
  artist: string,
  _version?: number | null,
};

export type ModelDrawingConditionInput = {
  lines?: ModelStringInput | null,
  isRemoved?: ModelBooleanInput | null,
  isComplete?: ModelBooleanInput | null,
  type?: ModelStringInput | null,
  artist?: ModelStringInput | null,
  and?: Array< ModelDrawingConditionInput | null > | null,
  or?: Array< ModelDrawingConditionInput | null > | null,
  not?: ModelDrawingConditionInput | null,
};

export type UpdateDrawingInput = {
  id: string,
  lines?: Array< string > | null,
  isRemoved?: boolean | null,
  isComplete?: boolean | null,
  type?: string | null,
  artist?: string | null,
  _version?: number | null,
};

export type DeleteDrawingInput = {
  id: string,
  _version?: number | null,
};

export type ModelUserReportFilterInput = {
  id?: ModelIDInput | null,
  isReviewed?: ModelBooleanInput | null,
  reportedBy?: ModelStringInput | null,
  gameID?: ModelIDInput | null,
  and?: Array< ModelUserReportFilterInput | null > | null,
  or?: Array< ModelUserReportFilterInput | null > | null,
  not?: ModelUserReportFilterInput | null,
};

export type ModelUserLikeFilterInput = {
  id?: ModelIDInput | null,
  user?: ModelStringInput | null,
  gameID?: ModelIDInput | null,
  and?: Array< ModelUserLikeFilterInput | null > | null,
  or?: Array< ModelUserLikeFilterInput | null > | null,
  not?: ModelUserLikeFilterInput | null,
};

export type ModelDrawingTallyFilterInput = {
  id?: ModelIDInput | null,
  count?: ModelIntInput | null,
  and?: Array< ModelDrawingTallyFilterInput | null > | null,
  or?: Array< ModelDrawingTallyFilterInput | null > | null,
  not?: ModelDrawingTallyFilterInput | null,
};

export type ModelDrawingTallyConnection = {
  __typename: "ModelDrawingTallyConnection",
  items:  Array<DrawingTally | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelGameFilterInput = {
  id?: ModelIDInput | null,
  password?: ModelStringInput | null,
  nsfw?: ModelBooleanInput | null,
  and?: Array< ModelGameFilterInput | null > | null,
  or?: Array< ModelGameFilterInput | null > | null,
  not?: ModelGameFilterInput | null,
  gameHeadId?: ModelIDInput | null,
  gameTorsoId?: ModelIDInput | null,
  gameLegsId?: ModelIDInput | null,
};

export type ModelGameConnection = {
  __typename: "ModelGameConnection",
  items:  Array<Game | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  userName?: ModelStringInput | null,
  friends?: ModelIDInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelDrawingFilterInput = {
  id?: ModelIDInput | null,
  lines?: ModelStringInput | null,
  isRemoved?: ModelBooleanInput | null,
  isComplete?: ModelBooleanInput | null,
  type?: ModelStringInput | null,
  artist?: ModelStringInput | null,
  and?: Array< ModelDrawingFilterInput | null > | null,
  or?: Array< ModelDrawingFilterInput | null > | null,
  not?: ModelDrawingFilterInput | null,
};

export type ModelDrawingConnection = {
  __typename: "ModelDrawingConnection",
  items:  Array<Drawing | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateUserReportMutationVariables = {
  input: CreateUserReportInput,
  condition?: ModelUserReportConditionInput | null,
};

export type CreateUserReportMutation = {
  createUserReport?:  {
    __typename: "UserReport",
    id: string,
    isReviewed?: boolean | null,
    reportedBy?: string | null,
    gameID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserReportMutationVariables = {
  input: UpdateUserReportInput,
  condition?: ModelUserReportConditionInput | null,
};

export type UpdateUserReportMutation = {
  updateUserReport?:  {
    __typename: "UserReport",
    id: string,
    isReviewed?: boolean | null,
    reportedBy?: string | null,
    gameID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserReportMutationVariables = {
  input: DeleteUserReportInput,
  condition?: ModelUserReportConditionInput | null,
};

export type DeleteUserReportMutation = {
  deleteUserReport?:  {
    __typename: "UserReport",
    id: string,
    isReviewed?: boolean | null,
    reportedBy?: string | null,
    gameID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserLikeMutationVariables = {
  input: CreateUserLikeInput,
  condition?: ModelUserLikeConditionInput | null,
};

export type CreateUserLikeMutation = {
  createUserLike?:  {
    __typename: "UserLike",
    id: string,
    user?: string | null,
    gameID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserLikeMutationVariables = {
  input: UpdateUserLikeInput,
  condition?: ModelUserLikeConditionInput | null,
};

export type UpdateUserLikeMutation = {
  updateUserLike?:  {
    __typename: "UserLike",
    id: string,
    user?: string | null,
    gameID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserLikeMutationVariables = {
  input: DeleteUserLikeInput,
  condition?: ModelUserLikeConditionInput | null,
};

export type DeleteUserLikeMutation = {
  deleteUserLike?:  {
    __typename: "UserLike",
    id: string,
    user?: string | null,
    gameID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateDrawingTallyMutationVariables = {
  input: CreateDrawingTallyInput,
  condition?: ModelDrawingTallyConditionInput | null,
};

export type CreateDrawingTallyMutation = {
  createDrawingTally?:  {
    __typename: "DrawingTally",
    id: string,
    count?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateDrawingTallyMutationVariables = {
  input: UpdateDrawingTallyInput,
  condition?: ModelDrawingTallyConditionInput | null,
};

export type UpdateDrawingTallyMutation = {
  updateDrawingTally?:  {
    __typename: "DrawingTally",
    id: string,
    count?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteDrawingTallyMutationVariables = {
  input: DeleteDrawingTallyInput,
  condition?: ModelDrawingTallyConditionInput | null,
};

export type DeleteDrawingTallyMutation = {
  deleteDrawingTally?:  {
    __typename: "DrawingTally",
    id: string,
    count?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateGameMutationVariables = {
  input: CreateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type CreateGameMutation = {
  createGame?:  {
    __typename: "Game",
    id: string,
    password?: string | null,
    nsfw?: boolean | null,
    head?:  {
      __typename: "Drawing",
      id: string,
      lines?: Array< string > | null,
      isRemoved: boolean,
      isComplete: boolean,
      type?: string | null,
      artist: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    torso?:  {
      __typename: "Drawing",
      id: string,
      lines?: Array< string > | null,
      isRemoved: boolean,
      isComplete: boolean,
      type?: string | null,
      artist: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    legs?:  {
      __typename: "Drawing",
      id: string,
      lines?: Array< string > | null,
      isRemoved: boolean,
      isComplete: boolean,
      type?: string | null,
      artist: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    UserReports?:  {
      __typename: "ModelUserReportConnection",
      items:  Array< {
        __typename: "UserReport",
        id: string,
        isReviewed?: boolean | null,
        reportedBy?: string | null,
        gameID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserLikes?:  {
      __typename: "ModelUserLikeConnection",
      items:  Array< {
        __typename: "UserLike",
        id: string,
        user?: string | null,
        gameID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    gameHeadId?: string | null,
    gameTorsoId?: string | null,
    gameLegsId?: string | null,
  } | null,
};

export type UpdateGameMutationVariables = {
  input: UpdateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type UpdateGameMutation = {
  updateGame?:  {
    __typename: "Game",
    id: string,
    password?: string | null,
    nsfw?: boolean | null,
    head?:  {
      __typename: "Drawing",
      id: string,
      lines?: Array< string > | null,
      isRemoved: boolean,
      isComplete: boolean,
      type?: string | null,
      artist: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    torso?:  {
      __typename: "Drawing",
      id: string,
      lines?: Array< string > | null,
      isRemoved: boolean,
      isComplete: boolean,
      type?: string | null,
      artist: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    legs?:  {
      __typename: "Drawing",
      id: string,
      lines?: Array< string > | null,
      isRemoved: boolean,
      isComplete: boolean,
      type?: string | null,
      artist: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    UserReports?:  {
      __typename: "ModelUserReportConnection",
      items:  Array< {
        __typename: "UserReport",
        id: string,
        isReviewed?: boolean | null,
        reportedBy?: string | null,
        gameID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserLikes?:  {
      __typename: "ModelUserLikeConnection",
      items:  Array< {
        __typename: "UserLike",
        id: string,
        user?: string | null,
        gameID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    gameHeadId?: string | null,
    gameTorsoId?: string | null,
    gameLegsId?: string | null,
  } | null,
};

export type DeleteGameMutationVariables = {
  input: DeleteGameInput,
  condition?: ModelGameConditionInput | null,
};

export type DeleteGameMutation = {
  deleteGame?:  {
    __typename: "Game",
    id: string,
    password?: string | null,
    nsfw?: boolean | null,
    head?:  {
      __typename: "Drawing",
      id: string,
      lines?: Array< string > | null,
      isRemoved: boolean,
      isComplete: boolean,
      type?: string | null,
      artist: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    torso?:  {
      __typename: "Drawing",
      id: string,
      lines?: Array< string > | null,
      isRemoved: boolean,
      isComplete: boolean,
      type?: string | null,
      artist: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    legs?:  {
      __typename: "Drawing",
      id: string,
      lines?: Array< string > | null,
      isRemoved: boolean,
      isComplete: boolean,
      type?: string | null,
      artist: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    UserReports?:  {
      __typename: "ModelUserReportConnection",
      items:  Array< {
        __typename: "UserReport",
        id: string,
        isReviewed?: boolean | null,
        reportedBy?: string | null,
        gameID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserLikes?:  {
      __typename: "ModelUserLikeConnection",
      items:  Array< {
        __typename: "UserLike",
        id: string,
        user?: string | null,
        gameID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    gameHeadId?: string | null,
    gameTorsoId?: string | null,
    gameLegsId?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    userName: string,
    friends?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    userName: string,
    friends?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    userName: string,
    friends?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateDrawingMutationVariables = {
  input: CreateDrawingInput,
  condition?: ModelDrawingConditionInput | null,
};

export type CreateDrawingMutation = {
  createDrawing?:  {
    __typename: "Drawing",
    id: string,
    lines?: Array< string > | null,
    isRemoved: boolean,
    isComplete: boolean,
    type?: string | null,
    artist: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateDrawingMutationVariables = {
  input: UpdateDrawingInput,
  condition?: ModelDrawingConditionInput | null,
};

export type UpdateDrawingMutation = {
  updateDrawing?:  {
    __typename: "Drawing",
    id: string,
    lines?: Array< string > | null,
    isRemoved: boolean,
    isComplete: boolean,
    type?: string | null,
    artist: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteDrawingMutationVariables = {
  input: DeleteDrawingInput,
  condition?: ModelDrawingConditionInput | null,
};

export type DeleteDrawingMutation = {
  deleteDrawing?:  {
    __typename: "Drawing",
    id: string,
    lines?: Array< string > | null,
    isRemoved: boolean,
    isComplete: boolean,
    type?: string | null,
    artist: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetUserReportQueryVariables = {
  id: string,
};

export type GetUserReportQuery = {
  getUserReport?:  {
    __typename: "UserReport",
    id: string,
    isReviewed?: boolean | null,
    reportedBy?: string | null,
    gameID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUserReportsQueryVariables = {
  filter?: ModelUserReportFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserReportsQuery = {
  listUserReports?:  {
    __typename: "ModelUserReportConnection",
    items:  Array< {
      __typename: "UserReport",
      id: string,
      isReviewed?: boolean | null,
      reportedBy?: string | null,
      gameID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserReportsQueryVariables = {
  filter?: ModelUserReportFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserReportsQuery = {
  syncUserReports?:  {
    __typename: "ModelUserReportConnection",
    items:  Array< {
      __typename: "UserReport",
      id: string,
      isReviewed?: boolean | null,
      reportedBy?: string | null,
      gameID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserLikeQueryVariables = {
  id: string,
};

export type GetUserLikeQuery = {
  getUserLike?:  {
    __typename: "UserLike",
    id: string,
    user?: string | null,
    gameID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUserLikesQueryVariables = {
  filter?: ModelUserLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserLikesQuery = {
  listUserLikes?:  {
    __typename: "ModelUserLikeConnection",
    items:  Array< {
      __typename: "UserLike",
      id: string,
      user?: string | null,
      gameID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserLikesQueryVariables = {
  filter?: ModelUserLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserLikesQuery = {
  syncUserLikes?:  {
    __typename: "ModelUserLikeConnection",
    items:  Array< {
      __typename: "UserLike",
      id: string,
      user?: string | null,
      gameID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetDrawingTallyQueryVariables = {
  id: string,
};

export type GetDrawingTallyQuery = {
  getDrawingTally?:  {
    __typename: "DrawingTally",
    id: string,
    count?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListDrawingTalliesQueryVariables = {
  filter?: ModelDrawingTallyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDrawingTalliesQuery = {
  listDrawingTallies?:  {
    __typename: "ModelDrawingTallyConnection",
    items:  Array< {
      __typename: "DrawingTally",
      id: string,
      count?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncDrawingTalliesQueryVariables = {
  filter?: ModelDrawingTallyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncDrawingTalliesQuery = {
  syncDrawingTallies?:  {
    __typename: "ModelDrawingTallyConnection",
    items:  Array< {
      __typename: "DrawingTally",
      id: string,
      count?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetGameQueryVariables = {
  id: string,
};

export type GetGameQuery = {
  getGame?:  {
    __typename: "Game",
    id: string,
    password?: string | null,
    nsfw?: boolean | null,
    head?:  {
      __typename: "Drawing",
      id: string,
      lines?: Array< string > | null,
      isRemoved: boolean,
      isComplete: boolean,
      type?: string | null,
      artist: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    torso?:  {
      __typename: "Drawing",
      id: string,
      lines?: Array< string > | null,
      isRemoved: boolean,
      isComplete: boolean,
      type?: string | null,
      artist: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    legs?:  {
      __typename: "Drawing",
      id: string,
      lines?: Array< string > | null,
      isRemoved: boolean,
      isComplete: boolean,
      type?: string | null,
      artist: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    UserReports?:  {
      __typename: "ModelUserReportConnection",
      items:  Array< {
        __typename: "UserReport",
        id: string,
        isReviewed?: boolean | null,
        reportedBy?: string | null,
        gameID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserLikes?:  {
      __typename: "ModelUserLikeConnection",
      items:  Array< {
        __typename: "UserLike",
        id: string,
        user?: string | null,
        gameID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    gameHeadId?: string | null,
    gameTorsoId?: string | null,
    gameLegsId?: string | null,
  } | null,
};

export type ListGamesQueryVariables = {
  filter?: ModelGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGamesQuery = {
  listGames?:  {
    __typename: "ModelGameConnection",
    items:  Array< {
      __typename: "Game",
      id: string,
      password?: string | null,
      nsfw?: boolean | null,
      head?:  {
        __typename: "Drawing",
        id: string,
        lines?: Array< string > | null,
        isRemoved: boolean,
        isComplete: boolean,
        type?: string | null,
        artist: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      torso?:  {
        __typename: "Drawing",
        id: string,
        lines?: Array< string > | null,
        isRemoved: boolean,
        isComplete: boolean,
        type?: string | null,
        artist: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      legs?:  {
        __typename: "Drawing",
        id: string,
        lines?: Array< string > | null,
        isRemoved: boolean,
        isComplete: boolean,
        type?: string | null,
        artist: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      UserReports?:  {
        __typename: "ModelUserReportConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      UserLikes?:  {
        __typename: "ModelUserLikeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      gameHeadId?: string | null,
      gameTorsoId?: string | null,
      gameLegsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncGamesQueryVariables = {
  filter?: ModelGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncGamesQuery = {
  syncGames?:  {
    __typename: "ModelGameConnection",
    items:  Array< {
      __typename: "Game",
      id: string,
      password?: string | null,
      nsfw?: boolean | null,
      head?:  {
        __typename: "Drawing",
        id: string,
        lines?: Array< string > | null,
        isRemoved: boolean,
        isComplete: boolean,
        type?: string | null,
        artist: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      torso?:  {
        __typename: "Drawing",
        id: string,
        lines?: Array< string > | null,
        isRemoved: boolean,
        isComplete: boolean,
        type?: string | null,
        artist: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      legs?:  {
        __typename: "Drawing",
        id: string,
        lines?: Array< string > | null,
        isRemoved: boolean,
        isComplete: boolean,
        type?: string | null,
        artist: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      UserReports?:  {
        __typename: "ModelUserReportConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      UserLikes?:  {
        __typename: "ModelUserLikeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      gameHeadId?: string | null,
      gameTorsoId?: string | null,
      gameLegsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    userName: string,
    friends?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      userName: string,
      friends?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      userName: string,
      friends?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetDrawingQueryVariables = {
  id: string,
};

export type GetDrawingQuery = {
  getDrawing?:  {
    __typename: "Drawing",
    id: string,
    lines?: Array< string > | null,
    isRemoved: boolean,
    isComplete: boolean,
    type?: string | null,
    artist: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListDrawingsQueryVariables = {
  filter?: ModelDrawingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDrawingsQuery = {
  listDrawings?:  {
    __typename: "ModelDrawingConnection",
    items:  Array< {
      __typename: "Drawing",
      id: string,
      lines?: Array< string > | null,
      isRemoved: boolean,
      isComplete: boolean,
      type?: string | null,
      artist: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncDrawingsQueryVariables = {
  filter?: ModelDrawingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncDrawingsQuery = {
  syncDrawings?:  {
    __typename: "ModelDrawingConnection",
    items:  Array< {
      __typename: "Drawing",
      id: string,
      lines?: Array< string > | null,
      isRemoved: boolean,
      isComplete: boolean,
      type?: string | null,
      artist: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateUserReportSubscription = {
  onCreateUserReport?:  {
    __typename: "UserReport",
    id: string,
    isReviewed?: boolean | null,
    reportedBy?: string | null,
    gameID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserReportSubscription = {
  onUpdateUserReport?:  {
    __typename: "UserReport",
    id: string,
    isReviewed?: boolean | null,
    reportedBy?: string | null,
    gameID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserReportSubscription = {
  onDeleteUserReport?:  {
    __typename: "UserReport",
    id: string,
    isReviewed?: boolean | null,
    reportedBy?: string | null,
    gameID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserLikeSubscription = {
  onCreateUserLike?:  {
    __typename: "UserLike",
    id: string,
    user?: string | null,
    gameID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserLikeSubscription = {
  onUpdateUserLike?:  {
    __typename: "UserLike",
    id: string,
    user?: string | null,
    gameID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserLikeSubscription = {
  onDeleteUserLike?:  {
    __typename: "UserLike",
    id: string,
    user?: string | null,
    gameID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateDrawingTallySubscription = {
  onCreateDrawingTally?:  {
    __typename: "DrawingTally",
    id: string,
    count?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateDrawingTallySubscription = {
  onUpdateDrawingTally?:  {
    __typename: "DrawingTally",
    id: string,
    count?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteDrawingTallySubscription = {
  onDeleteDrawingTally?:  {
    __typename: "DrawingTally",
    id: string,
    count?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateGameSubscription = {
  onCreateGame?:  {
    __typename: "Game",
    id: string,
    password?: string | null,
    nsfw?: boolean | null,
    head?:  {
      __typename: "Drawing",
      id: string,
      lines?: Array< string > | null,
      isRemoved: boolean,
      isComplete: boolean,
      type?: string | null,
      artist: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    torso?:  {
      __typename: "Drawing",
      id: string,
      lines?: Array< string > | null,
      isRemoved: boolean,
      isComplete: boolean,
      type?: string | null,
      artist: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    legs?:  {
      __typename: "Drawing",
      id: string,
      lines?: Array< string > | null,
      isRemoved: boolean,
      isComplete: boolean,
      type?: string | null,
      artist: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    UserReports?:  {
      __typename: "ModelUserReportConnection",
      items:  Array< {
        __typename: "UserReport",
        id: string,
        isReviewed?: boolean | null,
        reportedBy?: string | null,
        gameID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserLikes?:  {
      __typename: "ModelUserLikeConnection",
      items:  Array< {
        __typename: "UserLike",
        id: string,
        user?: string | null,
        gameID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    gameHeadId?: string | null,
    gameTorsoId?: string | null,
    gameLegsId?: string | null,
  } | null,
};

export type OnUpdateGameSubscription = {
  onUpdateGame?:  {
    __typename: "Game",
    id: string,
    password?: string | null,
    nsfw?: boolean | null,
    head?:  {
      __typename: "Drawing",
      id: string,
      lines?: Array< string > | null,
      isRemoved: boolean,
      isComplete: boolean,
      type?: string | null,
      artist: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    torso?:  {
      __typename: "Drawing",
      id: string,
      lines?: Array< string > | null,
      isRemoved: boolean,
      isComplete: boolean,
      type?: string | null,
      artist: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    legs?:  {
      __typename: "Drawing",
      id: string,
      lines?: Array< string > | null,
      isRemoved: boolean,
      isComplete: boolean,
      type?: string | null,
      artist: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    UserReports?:  {
      __typename: "ModelUserReportConnection",
      items:  Array< {
        __typename: "UserReport",
        id: string,
        isReviewed?: boolean | null,
        reportedBy?: string | null,
        gameID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserLikes?:  {
      __typename: "ModelUserLikeConnection",
      items:  Array< {
        __typename: "UserLike",
        id: string,
        user?: string | null,
        gameID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    gameHeadId?: string | null,
    gameTorsoId?: string | null,
    gameLegsId?: string | null,
  } | null,
};

export type OnDeleteGameSubscription = {
  onDeleteGame?:  {
    __typename: "Game",
    id: string,
    password?: string | null,
    nsfw?: boolean | null,
    head?:  {
      __typename: "Drawing",
      id: string,
      lines?: Array< string > | null,
      isRemoved: boolean,
      isComplete: boolean,
      type?: string | null,
      artist: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    torso?:  {
      __typename: "Drawing",
      id: string,
      lines?: Array< string > | null,
      isRemoved: boolean,
      isComplete: boolean,
      type?: string | null,
      artist: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    legs?:  {
      __typename: "Drawing",
      id: string,
      lines?: Array< string > | null,
      isRemoved: boolean,
      isComplete: boolean,
      type?: string | null,
      artist: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    UserReports?:  {
      __typename: "ModelUserReportConnection",
      items:  Array< {
        __typename: "UserReport",
        id: string,
        isReviewed?: boolean | null,
        reportedBy?: string | null,
        gameID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserLikes?:  {
      __typename: "ModelUserLikeConnection",
      items:  Array< {
        __typename: "UserLike",
        id: string,
        user?: string | null,
        gameID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    gameHeadId?: string | null,
    gameTorsoId?: string | null,
    gameLegsId?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    userName: string,
    friends?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    userName: string,
    friends?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    userName: string,
    friends?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateDrawingSubscription = {
  onCreateDrawing?:  {
    __typename: "Drawing",
    id: string,
    lines?: Array< string > | null,
    isRemoved: boolean,
    isComplete: boolean,
    type?: string | null,
    artist: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateDrawingSubscription = {
  onUpdateDrawing?:  {
    __typename: "Drawing",
    id: string,
    lines?: Array< string > | null,
    isRemoved: boolean,
    isComplete: boolean,
    type?: string | null,
    artist: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteDrawingSubscription = {
  onDeleteDrawing?:  {
    __typename: "Drawing",
    id: string,
    lines?: Array< string > | null,
    isRemoved: boolean,
    isComplete: boolean,
    type?: string | null,
    artist: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

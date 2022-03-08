/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserReport = /* GraphQL */ `
  mutation CreateUserReport(
    $input: CreateUserReportInput!
    $condition: ModelUserReportConditionInput
  ) {
    createUserReport(input: $input, condition: $condition) {
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
export const updateUserReport = /* GraphQL */ `
  mutation UpdateUserReport(
    $input: UpdateUserReportInput!
    $condition: ModelUserReportConditionInput
  ) {
    updateUserReport(input: $input, condition: $condition) {
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
export const deleteUserReport = /* GraphQL */ `
  mutation DeleteUserReport(
    $input: DeleteUserReportInput!
    $condition: ModelUserReportConditionInput
  ) {
    deleteUserReport(input: $input, condition: $condition) {
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
export const createUserLike = /* GraphQL */ `
  mutation CreateUserLike(
    $input: CreateUserLikeInput!
    $condition: ModelUserLikeConditionInput
  ) {
    createUserLike(input: $input, condition: $condition) {
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
export const updateUserLike = /* GraphQL */ `
  mutation UpdateUserLike(
    $input: UpdateUserLikeInput!
    $condition: ModelUserLikeConditionInput
  ) {
    updateUserLike(input: $input, condition: $condition) {
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
export const deleteUserLike = /* GraphQL */ `
  mutation DeleteUserLike(
    $input: DeleteUserLikeInput!
    $condition: ModelUserLikeConditionInput
  ) {
    deleteUserLike(input: $input, condition: $condition) {
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
export const createDrawingTally = /* GraphQL */ `
  mutation CreateDrawingTally(
    $input: CreateDrawingTallyInput!
    $condition: ModelDrawingTallyConditionInput
  ) {
    createDrawingTally(input: $input, condition: $condition) {
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
export const updateDrawingTally = /* GraphQL */ `
  mutation UpdateDrawingTally(
    $input: UpdateDrawingTallyInput!
    $condition: ModelDrawingTallyConditionInput
  ) {
    updateDrawingTally(input: $input, condition: $condition) {
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
export const deleteDrawingTally = /* GraphQL */ `
  mutation DeleteDrawingTally(
    $input: DeleteDrawingTallyInput!
    $condition: ModelDrawingTallyConditionInput
  ) {
    deleteDrawingTally(input: $input, condition: $condition) {
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
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
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
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
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
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createDrawing = /* GraphQL */ `
  mutation CreateDrawing(
    $input: CreateDrawingInput!
    $condition: ModelDrawingConditionInput
  ) {
    createDrawing(input: $input, condition: $condition) {
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
export const updateDrawing = /* GraphQL */ `
  mutation UpdateDrawing(
    $input: UpdateDrawingInput!
    $condition: ModelDrawingConditionInput
  ) {
    updateDrawing(input: $input, condition: $condition) {
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
export const deleteDrawing = /* GraphQL */ `
  mutation DeleteDrawing(
    $input: DeleteDrawingInput!
    $condition: ModelDrawingConditionInput
  ) {
    deleteDrawing(input: $input, condition: $condition) {
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

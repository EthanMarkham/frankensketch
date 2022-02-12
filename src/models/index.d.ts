import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UserLikeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserReportMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DrawingTallyMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GameMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DrawingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class UserLike {
  readonly id: string;
  readonly user?: string;
  readonly gameID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserLike, UserLikeMetaData>);
  static copyOf(source: UserLike, mutator: (draft: MutableModel<UserLike, UserLikeMetaData>) => MutableModel<UserLike, UserLikeMetaData> | void): UserLike;
}

export declare class UserReport {
  readonly id: string;
  readonly isReviewed?: boolean;
  readonly reportedBy?: string;
  readonly gameID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserReport, UserReportMetaData>);
  static copyOf(source: UserReport, mutator: (draft: MutableModel<UserReport, UserReportMetaData>) => MutableModel<UserReport, UserReportMetaData> | void): UserReport;
}

export declare class DrawingTally {
  readonly id: string;
  readonly count?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<DrawingTally, DrawingTallyMetaData>);
  static copyOf(source: DrawingTally, mutator: (draft: MutableModel<DrawingTally, DrawingTallyMetaData>) => MutableModel<DrawingTally, DrawingTallyMetaData> | void): DrawingTally;
}

export declare class Game {
  readonly id: string;
  readonly password?: string;
  readonly nsfw?: boolean;
  readonly head?: Drawing;
  readonly torso?: Drawing;
  readonly legs?: Drawing;
  readonly UserReports?: (UserReport | null)[];
  readonly UserLikes?: (UserLike | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly gameHeadId?: string;
  readonly gameTorsoId?: string;
  readonly gameLegsId?: string;
  constructor(init: ModelInit<Game, GameMetaData>);
  static copyOf(source: Game, mutator: (draft: MutableModel<Game, GameMetaData>) => MutableModel<Game, GameMetaData> | void): Game;
}

export declare class Drawing {
  readonly id: string;
  readonly lines?: string[];
  readonly isRemoved: boolean;
  readonly isComplete: boolean;
  readonly type?: string;
  readonly artist: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Drawing, DrawingMetaData>);
  static copyOf(source: Drawing, mutator: (draft: MutableModel<Drawing, DrawingMetaData>) => MutableModel<Drawing, DrawingMetaData> | void): Drawing;
}

export declare class User {
  readonly id: string;
  readonly userName: string;
  readonly friends?: string[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}
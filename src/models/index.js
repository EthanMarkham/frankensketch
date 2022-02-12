// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserLike, UserReport, DrawingTally, Game, Drawing, User } = initSchema(schema);

export {
  UserLike,
  UserReport,
  DrawingTally,
  Game,
  Drawing,
  User
};
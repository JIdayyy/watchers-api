import { Field, ObjectType } from 'type-graphql';

/* eslint-disable @typescript-eslint/no-unused-vars */
@ObjectType('Follow', {
  isAbstract: true,
})
export class FollowCount {
  @Field((_type) => Number)
  count: number;

  @Field((_type) => Boolean)
  isFollowing: boolean;
}

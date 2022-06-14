import { Field, ObjectType } from 'type-graphql';

/* eslint-disable @typescript-eslint/no-unused-vars */
@ObjectType('Count', {
  isAbstract: true,
})
export class Count {
  @Field((_type) => Number)
  count: number;
}

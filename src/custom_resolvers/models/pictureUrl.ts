/* eslint-disable @typescript-eslint/no-unused-vars */
import * as TypeGraphQL from 'type-graphql';

@TypeGraphQL.ObjectType('Picture', {
  isAbstract: true,
})
export class Picture {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  url!: string;
}

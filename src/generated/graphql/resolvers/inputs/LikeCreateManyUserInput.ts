import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("LikeCreateManyUserInput", {
  isAbstract: true
})
export class LikeCreateManyUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  post_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reply_id?: string | undefined;
}

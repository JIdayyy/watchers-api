import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForumWhereInput } from "../inputs/ForumWhereInput";

@TypeGraphQL.InputType("ForumRelationFilter", {
  isAbstract: true
})
export class ForumRelationFilter {
  @TypeGraphQL.Field(_type => ForumWhereInput, {
    nullable: true
  })
  is?: ForumWhereInput | undefined;

  @TypeGraphQL.Field(_type => ForumWhereInput, {
    nullable: true
  })
  isNot?: ForumWhereInput | undefined;
}

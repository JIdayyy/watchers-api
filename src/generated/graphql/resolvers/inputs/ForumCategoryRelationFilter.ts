import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForumCategoryWhereInput } from "../inputs/ForumCategoryWhereInput";

@TypeGraphQL.InputType("ForumCategoryRelationFilter", {
  isAbstract: true
})
export class ForumCategoryRelationFilter {
  @TypeGraphQL.Field(_type => ForumCategoryWhereInput, {
    nullable: true
  })
  is?: ForumCategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => ForumCategoryWhereInput, {
    nullable: true
  })
  isNot?: ForumCategoryWhereInput | undefined;
}

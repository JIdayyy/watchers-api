import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForumCategoryWhereInput } from "../inputs/ForumCategoryWhereInput";

@TypeGraphQL.InputType("ForumCategoryListRelationFilter", {
  isAbstract: true
})
export class ForumCategoryListRelationFilter {
  @TypeGraphQL.Field(_type => ForumCategoryWhereInput, {
    nullable: true
  })
  every?: ForumCategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => ForumCategoryWhereInput, {
    nullable: true
  })
  some?: ForumCategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => ForumCategoryWhereInput, {
    nullable: true
  })
  none?: ForumCategoryWhereInput | undefined;
}

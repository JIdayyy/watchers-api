import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArticleWhereInput } from "../inputs/ArticleWhereInput";

@TypeGraphQL.InputType("ArticleListRelationFilter", {
  isAbstract: true
})
export class ArticleListRelationFilter {
  @TypeGraphQL.Field(_type => ArticleWhereInput, {
    nullable: true
  })
  every?: ArticleWhereInput | undefined;

  @TypeGraphQL.Field(_type => ArticleWhereInput, {
    nullable: true
  })
  some?: ArticleWhereInput | undefined;

  @TypeGraphQL.Field(_type => ArticleWhereInput, {
    nullable: true
  })
  none?: ArticleWhereInput | undefined;
}

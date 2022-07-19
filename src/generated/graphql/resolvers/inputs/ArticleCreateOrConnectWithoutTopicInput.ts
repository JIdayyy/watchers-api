import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArticleCreateWithoutTopicInput } from "../inputs/ArticleCreateWithoutTopicInput";
import { ArticleWhereUniqueInput } from "../inputs/ArticleWhereUniqueInput";

@TypeGraphQL.InputType("ArticleCreateOrConnectWithoutTopicInput", {
  isAbstract: true
})
export class ArticleCreateOrConnectWithoutTopicInput {
  @TypeGraphQL.Field(_type => ArticleWhereUniqueInput, {
    nullable: false
  })
  where!: ArticleWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArticleCreateWithoutTopicInput, {
    nullable: false
  })
  create!: ArticleCreateWithoutTopicInput;
}

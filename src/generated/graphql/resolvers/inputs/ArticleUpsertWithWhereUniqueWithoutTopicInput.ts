import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArticleCreateWithoutTopicInput } from "../inputs/ArticleCreateWithoutTopicInput";
import { ArticleUpdateWithoutTopicInput } from "../inputs/ArticleUpdateWithoutTopicInput";
import { ArticleWhereUniqueInput } from "../inputs/ArticleWhereUniqueInput";

@TypeGraphQL.InputType("ArticleUpsertWithWhereUniqueWithoutTopicInput", {
  isAbstract: true
})
export class ArticleUpsertWithWhereUniqueWithoutTopicInput {
  @TypeGraphQL.Field(_type => ArticleWhereUniqueInput, {
    nullable: false
  })
  where!: ArticleWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArticleUpdateWithoutTopicInput, {
    nullable: false
  })
  update!: ArticleUpdateWithoutTopicInput;

  @TypeGraphQL.Field(_type => ArticleCreateWithoutTopicInput, {
    nullable: false
  })
  create!: ArticleCreateWithoutTopicInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArticleUpdateWithoutTopicInput } from "../inputs/ArticleUpdateWithoutTopicInput";
import { ArticleWhereUniqueInput } from "../inputs/ArticleWhereUniqueInput";

@TypeGraphQL.InputType("ArticleUpdateWithWhereUniqueWithoutTopicInput", {
  isAbstract: true
})
export class ArticleUpdateWithWhereUniqueWithoutTopicInput {
  @TypeGraphQL.Field(_type => ArticleWhereUniqueInput, {
    nullable: false
  })
  where!: ArticleWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArticleUpdateWithoutTopicInput, {
    nullable: false
  })
  data!: ArticleUpdateWithoutTopicInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArticleUpdateWithoutAuthorInput } from "../inputs/ArticleUpdateWithoutAuthorInput";
import { ArticleWhereUniqueInput } from "../inputs/ArticleWhereUniqueInput";

@TypeGraphQL.InputType("ArticleUpdateWithWhereUniqueWithoutAuthorInput", {
  isAbstract: true
})
export class ArticleUpdateWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => ArticleWhereUniqueInput, {
    nullable: false
  })
  where!: ArticleWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArticleUpdateWithoutAuthorInput, {
    nullable: false
  })
  data!: ArticleUpdateWithoutAuthorInput;
}

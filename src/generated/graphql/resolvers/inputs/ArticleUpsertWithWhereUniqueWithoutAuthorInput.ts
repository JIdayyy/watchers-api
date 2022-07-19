import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArticleCreateWithoutAuthorInput } from "../inputs/ArticleCreateWithoutAuthorInput";
import { ArticleUpdateWithoutAuthorInput } from "../inputs/ArticleUpdateWithoutAuthorInput";
import { ArticleWhereUniqueInput } from "../inputs/ArticleWhereUniqueInput";

@TypeGraphQL.InputType("ArticleUpsertWithWhereUniqueWithoutAuthorInput", {
  isAbstract: true
})
export class ArticleUpsertWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => ArticleWhereUniqueInput, {
    nullable: false
  })
  where!: ArticleWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArticleUpdateWithoutAuthorInput, {
    nullable: false
  })
  update!: ArticleUpdateWithoutAuthorInput;

  @TypeGraphQL.Field(_type => ArticleCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: ArticleCreateWithoutAuthorInput;
}

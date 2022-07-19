import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArticleCreateWithoutAuthorInput } from "../inputs/ArticleCreateWithoutAuthorInput";
import { ArticleWhereUniqueInput } from "../inputs/ArticleWhereUniqueInput";

@TypeGraphQL.InputType("ArticleCreateOrConnectWithoutAuthorInput", {
  isAbstract: true
})
export class ArticleCreateOrConnectWithoutAuthorInput {
  @TypeGraphQL.Field(_type => ArticleWhereUniqueInput, {
    nullable: false
  })
  where!: ArticleWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArticleCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: ArticleCreateWithoutAuthorInput;
}

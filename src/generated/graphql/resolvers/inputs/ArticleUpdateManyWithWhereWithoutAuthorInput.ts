import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArticleScalarWhereInput } from "../inputs/ArticleScalarWhereInput";
import { ArticleUpdateManyMutationInput } from "../inputs/ArticleUpdateManyMutationInput";

@TypeGraphQL.InputType("ArticleUpdateManyWithWhereWithoutAuthorInput", {
  isAbstract: true
})
export class ArticleUpdateManyWithWhereWithoutAuthorInput {
  @TypeGraphQL.Field(_type => ArticleScalarWhereInput, {
    nullable: false
  })
  where!: ArticleScalarWhereInput;

  @TypeGraphQL.Field(_type => ArticleUpdateManyMutationInput, {
    nullable: false
  })
  data!: ArticleUpdateManyMutationInput;
}

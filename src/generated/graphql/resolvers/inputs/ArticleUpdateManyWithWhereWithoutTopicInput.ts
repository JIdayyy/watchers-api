import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArticleScalarWhereInput } from "../inputs/ArticleScalarWhereInput";
import { ArticleUpdateManyMutationInput } from "../inputs/ArticleUpdateManyMutationInput";

@TypeGraphQL.InputType("ArticleUpdateManyWithWhereWithoutTopicInput", {
  isAbstract: true
})
export class ArticleUpdateManyWithWhereWithoutTopicInput {
  @TypeGraphQL.Field(_type => ArticleScalarWhereInput, {
    nullable: false
  })
  where!: ArticleScalarWhereInput;

  @TypeGraphQL.Field(_type => ArticleUpdateManyMutationInput, {
    nullable: false
  })
  data!: ArticleUpdateManyMutationInput;
}

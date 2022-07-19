import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForumCategoryScalarWhereInput } from "../inputs/ForumCategoryScalarWhereInput";
import { ForumCategoryUpdateManyMutationInput } from "../inputs/ForumCategoryUpdateManyMutationInput";

@TypeGraphQL.InputType("ForumCategoryUpdateManyWithWhereWithoutForumInput", {
  isAbstract: true
})
export class ForumCategoryUpdateManyWithWhereWithoutForumInput {
  @TypeGraphQL.Field(_type => ForumCategoryScalarWhereInput, {
    nullable: false
  })
  where!: ForumCategoryScalarWhereInput;

  @TypeGraphQL.Field(_type => ForumCategoryUpdateManyMutationInput, {
    nullable: false
  })
  data!: ForumCategoryUpdateManyMutationInput;
}

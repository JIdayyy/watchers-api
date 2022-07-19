import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ForumCategoryUpdateManyMutationInput } from "../../../inputs/ForumCategoryUpdateManyMutationInput";
import { ForumCategoryWhereInput } from "../../../inputs/ForumCategoryWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyForumCategoryArgs {
  @TypeGraphQL.Field(_type => ForumCategoryUpdateManyMutationInput, {
    nullable: false
  })
  data!: ForumCategoryUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ForumCategoryWhereInput, {
    nullable: true
  })
  where?: ForumCategoryWhereInput | undefined;
}

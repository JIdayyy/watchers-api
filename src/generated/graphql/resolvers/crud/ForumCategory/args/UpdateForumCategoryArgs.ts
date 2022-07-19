import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ForumCategoryUpdateInput } from "../../../inputs/ForumCategoryUpdateInput";
import { ForumCategoryWhereUniqueInput } from "../../../inputs/ForumCategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateForumCategoryArgs {
  @TypeGraphQL.Field(_type => ForumCategoryUpdateInput, {
    nullable: false
  })
  data!: ForumCategoryUpdateInput;

  @TypeGraphQL.Field(_type => ForumCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: ForumCategoryWhereUniqueInput;
}

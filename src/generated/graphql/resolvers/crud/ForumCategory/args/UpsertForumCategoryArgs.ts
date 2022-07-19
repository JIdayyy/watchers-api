import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ForumCategoryCreateInput } from "../../../inputs/ForumCategoryCreateInput";
import { ForumCategoryUpdateInput } from "../../../inputs/ForumCategoryUpdateInput";
import { ForumCategoryWhereUniqueInput } from "../../../inputs/ForumCategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertForumCategoryArgs {
  @TypeGraphQL.Field(_type => ForumCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: ForumCategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => ForumCategoryCreateInput, {
    nullable: false
  })
  create!: ForumCategoryCreateInput;

  @TypeGraphQL.Field(_type => ForumCategoryUpdateInput, {
    nullable: false
  })
  update!: ForumCategoryUpdateInput;
}

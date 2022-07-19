import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ForumCategoryCreateInput } from "../../../inputs/ForumCategoryCreateInput";

@TypeGraphQL.ArgsType()
export class CreateForumCategoryArgs {
  @TypeGraphQL.Field(_type => ForumCategoryCreateInput, {
    nullable: false
  })
  data!: ForumCategoryCreateInput;
}

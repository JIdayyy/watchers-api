import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ForumCategoryWhereUniqueInput } from "../../../inputs/ForumCategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteForumCategoryArgs {
  @TypeGraphQL.Field(_type => ForumCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: ForumCategoryWhereUniqueInput;
}

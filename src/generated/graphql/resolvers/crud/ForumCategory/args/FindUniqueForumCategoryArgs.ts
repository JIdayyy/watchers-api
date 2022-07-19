import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ForumCategoryWhereUniqueInput } from "../../../inputs/ForumCategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueForumCategoryArgs {
  @TypeGraphQL.Field(_type => ForumCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: ForumCategoryWhereUniqueInput;
}

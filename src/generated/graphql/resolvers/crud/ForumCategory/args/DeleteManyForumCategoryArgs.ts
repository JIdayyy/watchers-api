import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ForumCategoryWhereInput } from "../../../inputs/ForumCategoryWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyForumCategoryArgs {
  @TypeGraphQL.Field(_type => ForumCategoryWhereInput, {
    nullable: true
  })
  where?: ForumCategoryWhereInput | undefined;
}

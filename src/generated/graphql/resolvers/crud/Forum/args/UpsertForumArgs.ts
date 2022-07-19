import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ForumCreateInput } from "../../../inputs/ForumCreateInput";
import { ForumUpdateInput } from "../../../inputs/ForumUpdateInput";
import { ForumWhereUniqueInput } from "../../../inputs/ForumWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertForumArgs {
  @TypeGraphQL.Field(_type => ForumWhereUniqueInput, {
    nullable: false
  })
  where!: ForumWhereUniqueInput;

  @TypeGraphQL.Field(_type => ForumCreateInput, {
    nullable: false
  })
  create!: ForumCreateInput;

  @TypeGraphQL.Field(_type => ForumUpdateInput, {
    nullable: false
  })
  update!: ForumUpdateInput;
}

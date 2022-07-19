import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ForumCreateInput } from "../../../inputs/ForumCreateInput";

@TypeGraphQL.ArgsType()
export class CreateForumArgs {
  @TypeGraphQL.Field(_type => ForumCreateInput, {
    nullable: false
  })
  data!: ForumCreateInput;
}

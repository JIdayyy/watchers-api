import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ForumUpdateInput } from "../../../inputs/ForumUpdateInput";
import { ForumWhereUniqueInput } from "../../../inputs/ForumWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateForumArgs {
  @TypeGraphQL.Field(_type => ForumUpdateInput, {
    nullable: false
  })
  data!: ForumUpdateInput;

  @TypeGraphQL.Field(_type => ForumWhereUniqueInput, {
    nullable: false
  })
  where!: ForumWhereUniqueInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ForumWhereUniqueInput } from "../../../inputs/ForumWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueForumArgs {
  @TypeGraphQL.Field(_type => ForumWhereUniqueInput, {
    nullable: false
  })
  where!: ForumWhereUniqueInput;
}

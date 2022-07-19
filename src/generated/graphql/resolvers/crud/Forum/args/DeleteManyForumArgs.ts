import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ForumWhereInput } from "../../../inputs/ForumWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyForumArgs {
  @TypeGraphQL.Field(_type => ForumWhereInput, {
    nullable: true
  })
  where?: ForumWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ForumUpdateManyMutationInput } from "../../../inputs/ForumUpdateManyMutationInput";
import { ForumWhereInput } from "../../../inputs/ForumWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyForumArgs {
  @TypeGraphQL.Field(_type => ForumUpdateManyMutationInput, {
    nullable: false
  })
  data!: ForumUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ForumWhereInput, {
    nullable: true
  })
  where?: ForumWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ForumOrderByWithRelationInput } from "../../../inputs/ForumOrderByWithRelationInput";
import { ForumWhereInput } from "../../../inputs/ForumWhereInput";
import { ForumWhereUniqueInput } from "../../../inputs/ForumWhereUniqueInput";
import { ForumScalarFieldEnum } from "../../../../enums/ForumScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstForumArgs {
  @TypeGraphQL.Field(_type => ForumWhereInput, {
    nullable: true
  })
  where?: ForumWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ForumOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ForumOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ForumWhereUniqueInput, {
    nullable: true
  })
  cursor?: ForumWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ForumScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "created_at" | "updated_at" | "roles" | "is_disabled"> | undefined;
}

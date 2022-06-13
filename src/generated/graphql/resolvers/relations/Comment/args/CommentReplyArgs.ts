import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReplyOrderByWithRelationInput } from "../../../inputs/ReplyOrderByWithRelationInput";
import { ReplyWhereInput } from "../../../inputs/ReplyWhereInput";
import { ReplyWhereUniqueInput } from "../../../inputs/ReplyWhereUniqueInput";
import { ReplyScalarFieldEnum } from "../../../../enums/ReplyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class CommentReplyArgs {
  @TypeGraphQL.Field(_type => ReplyWhereInput, {
    nullable: true
  })
  where?: ReplyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReplyOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ReplyOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ReplyWhereUniqueInput, {
    nullable: true
  })
  cursor?: ReplyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ReplyScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "content" | "picture" | "created_at" | "updated_at" | "userId" | "commentId"> | undefined;
}

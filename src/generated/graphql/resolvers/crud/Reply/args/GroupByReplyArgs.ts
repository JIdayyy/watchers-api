import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReplyOrderByWithAggregationInput } from "../../../inputs/ReplyOrderByWithAggregationInput";
import { ReplyScalarWhereWithAggregatesInput } from "../../../inputs/ReplyScalarWhereWithAggregatesInput";
import { ReplyWhereInput } from "../../../inputs/ReplyWhereInput";
import { ReplyScalarFieldEnum } from "../../../../enums/ReplyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByReplyArgs {
  @TypeGraphQL.Field(_type => ReplyWhereInput, {
    nullable: true
  })
  where?: ReplyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReplyOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ReplyOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReplyScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "content" | "picture" | "created_at" | "updated_at" | "userId" | "commentId">;

  @TypeGraphQL.Field(_type => ReplyScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ReplyScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

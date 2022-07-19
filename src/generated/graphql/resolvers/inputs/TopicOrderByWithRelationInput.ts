import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArticleOrderByRelationAggregateInput } from "../inputs/ArticleOrderByRelationAggregateInput";
import { ForumCategoryOrderByWithRelationInput } from "../inputs/ForumCategoryOrderByWithRelationInput";
import { UserOrderByRelationAggregateInput } from "../inputs/UserOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TopicOrderByWithRelationInput", {
  isAbstract: true
})
export class TopicOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updated_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ForumCategoryOrderByWithRelationInput, {
    nullable: true
  })
  forum_category?: ForumCategoryOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ArticleOrderByRelationAggregateInput, {
    nullable: true
  })
  articles?: ArticleOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_disabled?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserOrderByRelationAggregateInput, {
    nullable: true
  })
  moderators?: UserOrderByRelationAggregateInput | undefined;
}

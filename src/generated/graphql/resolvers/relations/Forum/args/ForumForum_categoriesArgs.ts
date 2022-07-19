import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ForumCategoryOrderByWithRelationInput } from "../../../inputs/ForumCategoryOrderByWithRelationInput";
import { ForumCategoryWhereInput } from "../../../inputs/ForumCategoryWhereInput";
import { ForumCategoryWhereUniqueInput } from "../../../inputs/ForumCategoryWhereUniqueInput";
import { ForumCategoryScalarFieldEnum } from "../../../../enums/ForumCategoryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ForumForum_categoriesArgs {
  @TypeGraphQL.Field(_type => ForumCategoryWhereInput, {
    nullable: true
  })
  where?: ForumCategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ForumCategoryOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ForumCategoryOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ForumCategoryWhereUniqueInput, {
    nullable: true
  })
  cursor?: ForumCategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ForumCategoryScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "icon" | "name" | "description" | "created_at" | "updated_at" | "forum_id" | "is_disabled"> | undefined;
}

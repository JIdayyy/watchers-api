import * as TypeGraphQL from "type-graphql";

export enum PostScalarFieldEnum {
  id = "id",
  slug = "slug",
  title = "title",
  cover_picture = "cover_picture",
  content = "content",
  isDraft = "isDraft",
  created_at = "created_at",
  is_disabled = "is_disabled",
  updated_at = "updated_at",
  userId = "userId",
  categoryId = "categoryId"
}
TypeGraphQL.registerEnumType(PostScalarFieldEnum, {
  name: "PostScalarFieldEnum",
  description: undefined,
});

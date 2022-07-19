import * as TypeGraphQL from "type-graphql";

export enum ForumCategoryScalarFieldEnum {
  id = "id",
  icon = "icon",
  name = "name",
  description = "description",
  created_at = "created_at",
  updated_at = "updated_at",
  forum_id = "forum_id",
  is_disabled = "is_disabled"
}
TypeGraphQL.registerEnumType(ForumCategoryScalarFieldEnum, {
  name: "ForumCategoryScalarFieldEnum",
  description: undefined,
});

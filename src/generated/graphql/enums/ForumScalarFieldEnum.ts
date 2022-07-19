import * as TypeGraphQL from "type-graphql";

export enum ForumScalarFieldEnum {
  id = "id",
  name = "name",
  created_at = "created_at",
  updated_at = "updated_at",
  roles = "roles",
  is_disabled = "is_disabled"
}
TypeGraphQL.registerEnumType(ForumScalarFieldEnum, {
  name: "ForumScalarFieldEnum",
  description: undefined,
});

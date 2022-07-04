import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  first_name = "first_name",
  last_name = "last_name",
  email = "email",
  image = "image",
  emailVerified = "emailVerified",
  name = "name",
  password = "password",
  is_disabled = "is_disabled",
  avatar = "avatar",
  role = "role",
  created_at = "created_at",
  updated_at = "updated_at",
  nickname = "nickname",
  follower_id = "follower_id"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});

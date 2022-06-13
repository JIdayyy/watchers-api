import * as TypeGraphQL from "type-graphql";

export enum CommentScalarFieldEnum {
  id = "id",
  picture = "picture",
  content = "content",
  created_at = "created_at",
  updated_at = "updated_at",
  userId = "userId",
  postSlug = "postSlug"
}
TypeGraphQL.registerEnumType(CommentScalarFieldEnum, {
  name: "CommentScalarFieldEnum",
  description: undefined,
});

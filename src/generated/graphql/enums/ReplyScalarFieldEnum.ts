import * as TypeGraphQL from "type-graphql";

export enum ReplyScalarFieldEnum {
  id = "id",
  content = "content",
  picture = "picture",
  created_at = "created_at",
  updated_at = "updated_at",
  userId = "userId",
  commentId = "commentId"
}
TypeGraphQL.registerEnumType(ReplyScalarFieldEnum, {
  name: "ReplyScalarFieldEnum",
  description: undefined,
});

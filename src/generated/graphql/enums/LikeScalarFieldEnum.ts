import * as TypeGraphQL from "type-graphql";

export enum LikeScalarFieldEnum {
  id = "id",
  post_id = "post_id",
  user_id = "user_id",
  reply_id = "reply_id"
}
TypeGraphQL.registerEnumType(LikeScalarFieldEnum, {
  name: "LikeScalarFieldEnum",
  description: undefined,
});

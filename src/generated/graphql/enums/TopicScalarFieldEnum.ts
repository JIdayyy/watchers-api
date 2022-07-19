import * as TypeGraphQL from "type-graphql";

export enum TopicScalarFieldEnum {
  id = "id",
  name = "name",
  created_at = "created_at",
  updated_at = "updated_at",
  is_disabled = "is_disabled"
}
TypeGraphQL.registerEnumType(TopicScalarFieldEnum, {
  name: "TopicScalarFieldEnum",
  description: undefined,
});

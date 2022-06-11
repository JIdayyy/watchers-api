import * as TypeGraphQL from "type-graphql";

export enum CategoryScalarFieldEnum {
  id = "id",
  name = "name",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(CategoryScalarFieldEnum, {
  name: "CategoryScalarFieldEnum",
  description: undefined,
});

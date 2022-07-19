import * as TypeGraphQL from "type-graphql";

export enum ArticleScalarFieldEnum {
  id = "id",
  name = "name",
  content = "content",
  created_at = "created_at",
  updated_at = "updated_at",
  author_id = "author_id",
  is_disabled = "is_disabled"
}
TypeGraphQL.registerEnumType(ArticleScalarFieldEnum, {
  name: "ArticleScalarFieldEnum",
  description: undefined,
});

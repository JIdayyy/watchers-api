import * as TypeGraphQL from "type-graphql";

export enum PreferenceScalarFieldEnum {
  id = "id",
  showEmail = "showEmail",
  website = "website",
  location = "location",
  skills = "skills",
  job = "job",
  education = "education",
  bio = "bio",
  color_1 = "color_1",
  color_2 = "color_2",
  created_at = "created_at",
  updated_at = "updated_at",
  userId = "userId"
}
TypeGraphQL.registerEnumType(PreferenceScalarFieldEnum, {
  name: "PreferenceScalarFieldEnum",
  description: undefined,
});

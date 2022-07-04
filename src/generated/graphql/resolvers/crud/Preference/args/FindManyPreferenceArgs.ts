import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PreferenceOrderByWithRelationInput } from "../../../inputs/PreferenceOrderByWithRelationInput";
import { PreferenceWhereInput } from "../../../inputs/PreferenceWhereInput";
import { PreferenceWhereUniqueInput } from "../../../inputs/PreferenceWhereUniqueInput";
import { PreferenceScalarFieldEnum } from "../../../../enums/PreferenceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyPreferenceArgs {
  @TypeGraphQL.Field(_type => PreferenceWhereInput, {
    nullable: true
  })
  where?: PreferenceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PreferenceOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PreferenceOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PreferenceWhereUniqueInput, {
    nullable: true
  })
  cursor?: PreferenceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PreferenceScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "showEmail" | "website" | "location" | "skills" | "job" | "education" | "bio" | "color_1" | "color_2" | "created_at" | "updated_at" | "userId"> | undefined;
}

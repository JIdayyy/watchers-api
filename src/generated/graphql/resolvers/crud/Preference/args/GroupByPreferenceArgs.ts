import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PreferenceOrderByWithAggregationInput } from "../../../inputs/PreferenceOrderByWithAggregationInput";
import { PreferenceScalarWhereWithAggregatesInput } from "../../../inputs/PreferenceScalarWhereWithAggregatesInput";
import { PreferenceWhereInput } from "../../../inputs/PreferenceWhereInput";
import { PreferenceScalarFieldEnum } from "../../../../enums/PreferenceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPreferenceArgs {
  @TypeGraphQL.Field(_type => PreferenceWhereInput, {
    nullable: true
  })
  where?: PreferenceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PreferenceOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PreferenceOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PreferenceScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "showEmail" | "website" | "location" | "skills" | "job" | "education" | "bio" | "color_1" | "color_2" | "created_at" | "updated_at" | "userId">;

  @TypeGraphQL.Field(_type => PreferenceScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PreferenceScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

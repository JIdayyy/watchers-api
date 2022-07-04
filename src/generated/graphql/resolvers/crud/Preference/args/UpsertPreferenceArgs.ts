import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PreferenceCreateInput } from "../../../inputs/PreferenceCreateInput";
import { PreferenceUpdateInput } from "../../../inputs/PreferenceUpdateInput";
import { PreferenceWhereUniqueInput } from "../../../inputs/PreferenceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertPreferenceArgs {
  @TypeGraphQL.Field(_type => PreferenceWhereUniqueInput, {
    nullable: false
  })
  where!: PreferenceWhereUniqueInput;

  @TypeGraphQL.Field(_type => PreferenceCreateInput, {
    nullable: false
  })
  create!: PreferenceCreateInput;

  @TypeGraphQL.Field(_type => PreferenceUpdateInput, {
    nullable: false
  })
  update!: PreferenceUpdateInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PreferenceUpdateInput } from "../../../inputs/PreferenceUpdateInput";
import { PreferenceWhereUniqueInput } from "../../../inputs/PreferenceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdatePreferenceArgs {
  @TypeGraphQL.Field(_type => PreferenceUpdateInput, {
    nullable: false
  })
  data!: PreferenceUpdateInput;

  @TypeGraphQL.Field(_type => PreferenceWhereUniqueInput, {
    nullable: false
  })
  where!: PreferenceWhereUniqueInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PreferenceCreateInput } from "../../../inputs/PreferenceCreateInput";

@TypeGraphQL.ArgsType()
export class CreatePreferenceArgs {
  @TypeGraphQL.Field(_type => PreferenceCreateInput, {
    nullable: false
  })
  data!: PreferenceCreateInput;
}

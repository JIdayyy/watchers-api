import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PreferenceWhereUniqueInput } from "../../../inputs/PreferenceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeletePreferenceArgs {
  @TypeGraphQL.Field(_type => PreferenceWhereUniqueInput, {
    nullable: false
  })
  where!: PreferenceWhereUniqueInput;
}

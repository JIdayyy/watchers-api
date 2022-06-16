import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PreferenceWhereInput } from "../../../inputs/PreferenceWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPreferenceArgs {
  @TypeGraphQL.Field(_type => PreferenceWhereInput, {
    nullable: true
  })
  where?: PreferenceWhereInput | undefined;
}

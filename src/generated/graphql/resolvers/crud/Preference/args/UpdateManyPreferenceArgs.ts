import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PreferenceUpdateManyMutationInput } from "../../../inputs/PreferenceUpdateManyMutationInput";
import { PreferenceWhereInput } from "../../../inputs/PreferenceWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPreferenceArgs {
  @TypeGraphQL.Field(_type => PreferenceUpdateManyMutationInput, {
    nullable: false
  })
  data!: PreferenceUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PreferenceWhereInput, {
    nullable: true
  })
  where?: PreferenceWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PreferenceCreateManyInput } from "../../../inputs/PreferenceCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPreferenceArgs {
  @TypeGraphQL.Field(_type => [PreferenceCreateManyInput], {
    nullable: false
  })
  data!: PreferenceCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

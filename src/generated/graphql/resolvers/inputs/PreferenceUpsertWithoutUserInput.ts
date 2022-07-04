import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PreferenceCreateWithoutUserInput } from "../inputs/PreferenceCreateWithoutUserInput";
import { PreferenceUpdateWithoutUserInput } from "../inputs/PreferenceUpdateWithoutUserInput";

@TypeGraphQL.InputType("PreferenceUpsertWithoutUserInput", {
  isAbstract: true
})
export class PreferenceUpsertWithoutUserInput {
  @TypeGraphQL.Field(_type => PreferenceUpdateWithoutUserInput, {
    nullable: false
  })
  update!: PreferenceUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => PreferenceCreateWithoutUserInput, {
    nullable: false
  })
  create!: PreferenceCreateWithoutUserInput;
}

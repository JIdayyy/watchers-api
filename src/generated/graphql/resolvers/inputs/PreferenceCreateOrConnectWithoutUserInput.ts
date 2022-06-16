import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PreferenceCreateWithoutUserInput } from "../inputs/PreferenceCreateWithoutUserInput";
import { PreferenceWhereUniqueInput } from "../inputs/PreferenceWhereUniqueInput";

@TypeGraphQL.InputType("PreferenceCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class PreferenceCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => PreferenceWhereUniqueInput, {
    nullable: false
  })
  where!: PreferenceWhereUniqueInput;

  @TypeGraphQL.Field(_type => PreferenceCreateWithoutUserInput, {
    nullable: false
  })
  create!: PreferenceCreateWithoutUserInput;
}

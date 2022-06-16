import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PreferenceCreateOrConnectWithoutUserInput } from "../inputs/PreferenceCreateOrConnectWithoutUserInput";
import { PreferenceCreateWithoutUserInput } from "../inputs/PreferenceCreateWithoutUserInput";
import { PreferenceWhereUniqueInput } from "../inputs/PreferenceWhereUniqueInput";

@TypeGraphQL.InputType("PreferenceCreateNestedOneWithoutUserInput", {
  isAbstract: true
})
export class PreferenceCreateNestedOneWithoutUserInput {
  @TypeGraphQL.Field(_type => PreferenceCreateWithoutUserInput, {
    nullable: true
  })
  create?: PreferenceCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PreferenceCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: PreferenceCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PreferenceWhereUniqueInput, {
    nullable: true
  })
  connect?: PreferenceWhereUniqueInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPreferenceInput } from "../inputs/UserCreateOrConnectWithoutPreferenceInput";
import { UserCreateWithoutPreferenceInput } from "../inputs/UserCreateWithoutPreferenceInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutPreferenceInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutPreferenceInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPreferenceInput, {
    nullable: true
  })
  create?: UserCreateWithoutPreferenceInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPreferenceInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPreferenceInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}

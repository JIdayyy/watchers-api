import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPreferenceInput } from "../inputs/UserCreateOrConnectWithoutPreferenceInput";
import { UserCreateWithoutPreferenceInput } from "../inputs/UserCreateWithoutPreferenceInput";
import { UserUpdateWithoutPreferenceInput } from "../inputs/UserUpdateWithoutPreferenceInput";
import { UserUpsertWithoutPreferenceInput } from "../inputs/UserUpsertWithoutPreferenceInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutPreferenceInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutPreferenceInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPreferenceInput, {
    nullable: true
  })
  create?: UserCreateWithoutPreferenceInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPreferenceInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPreferenceInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutPreferenceInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutPreferenceInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutPreferenceInput, {
    nullable: true
  })
  update?: UserUpdateWithoutPreferenceInput | undefined;
}

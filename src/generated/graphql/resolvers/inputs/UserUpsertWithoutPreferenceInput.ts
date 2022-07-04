import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPreferenceInput } from "../inputs/UserCreateWithoutPreferenceInput";
import { UserUpdateWithoutPreferenceInput } from "../inputs/UserUpdateWithoutPreferenceInput";

@TypeGraphQL.InputType("UserUpsertWithoutPreferenceInput", {
  isAbstract: true
})
export class UserUpsertWithoutPreferenceInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutPreferenceInput, {
    nullable: false
  })
  update!: UserUpdateWithoutPreferenceInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutPreferenceInput, {
    nullable: false
  })
  create!: UserCreateWithoutPreferenceInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPreferenceInput } from "../inputs/UserCreateWithoutPreferenceInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutPreferenceInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutPreferenceInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutPreferenceInput, {
    nullable: false
  })
  create!: UserCreateWithoutPreferenceInput;
}

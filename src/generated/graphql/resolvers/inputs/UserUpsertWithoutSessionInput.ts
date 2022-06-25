import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutSessionInput } from "../inputs/UserCreateWithoutSessionInput";
import { UserUpdateWithoutSessionInput } from "../inputs/UserUpdateWithoutSessionInput";

@TypeGraphQL.InputType("UserUpsertWithoutSessionInput", {
  isAbstract: true
})
export class UserUpsertWithoutSessionInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutSessionInput, {
    nullable: false
  })
  update!: UserUpdateWithoutSessionInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutSessionInput, {
    nullable: false
  })
  create!: UserCreateWithoutSessionInput;
}

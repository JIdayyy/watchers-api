import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFollowed_usersInput } from "../inputs/UserCreateWithoutFollowed_usersInput";
import { UserUpdateWithoutFollowed_usersInput } from "../inputs/UserUpdateWithoutFollowed_usersInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutFollowed_usersInput", {
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutFollowed_usersInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutFollowed_usersInput, {
    nullable: false
  })
  update!: UserUpdateWithoutFollowed_usersInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFollowed_usersInput, {
    nullable: false
  })
  create!: UserCreateWithoutFollowed_usersInput;
}

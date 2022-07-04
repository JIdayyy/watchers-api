import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutFollowed_usersInput } from "../inputs/UserUpdateWithoutFollowed_usersInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateWithWhereUniqueWithoutFollowed_usersInput", {
  isAbstract: true
})
export class UserUpdateWithWhereUniqueWithoutFollowed_usersInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutFollowed_usersInput, {
    nullable: false
  })
  data!: UserUpdateWithoutFollowed_usersInput;
}

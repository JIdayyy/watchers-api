import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutTopics_moderatedInput } from "../inputs/UserCreateWithoutTopics_moderatedInput";
import { UserUpdateWithoutTopics_moderatedInput } from "../inputs/UserUpdateWithoutTopics_moderatedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutTopics_moderatedInput", {
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutTopics_moderatedInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutTopics_moderatedInput, {
    nullable: false
  })
  update!: UserUpdateWithoutTopics_moderatedInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTopics_moderatedInput, {
    nullable: false
  })
  create!: UserCreateWithoutTopics_moderatedInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutForum_articlesInput } from "../inputs/UserCreateWithoutForum_articlesInput";
import { UserUpdateWithoutForum_articlesInput } from "../inputs/UserUpdateWithoutForum_articlesInput";

@TypeGraphQL.InputType("UserUpsertWithoutForum_articlesInput", {
  isAbstract: true
})
export class UserUpsertWithoutForum_articlesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutForum_articlesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutForum_articlesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutForum_articlesInput, {
    nullable: false
  })
  create!: UserCreateWithoutForum_articlesInput;
}

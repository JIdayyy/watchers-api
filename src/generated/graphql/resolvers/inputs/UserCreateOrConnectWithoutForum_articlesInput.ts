import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutForum_articlesInput } from "../inputs/UserCreateWithoutForum_articlesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutForum_articlesInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutForum_articlesInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutForum_articlesInput, {
    nullable: false
  })
  create!: UserCreateWithoutForum_articlesInput;
}

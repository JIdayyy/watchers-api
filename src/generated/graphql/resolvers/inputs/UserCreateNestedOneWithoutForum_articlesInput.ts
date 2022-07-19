import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutForum_articlesInput } from "../inputs/UserCreateOrConnectWithoutForum_articlesInput";
import { UserCreateWithoutForum_articlesInput } from "../inputs/UserCreateWithoutForum_articlesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutForum_articlesInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutForum_articlesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutForum_articlesInput, {
    nullable: true
  })
  create?: UserCreateWithoutForum_articlesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutForum_articlesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutForum_articlesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}

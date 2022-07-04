import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFollowed_usersInput } from "../inputs/UserCreateOrConnectWithoutFollowed_usersInput";
import { UserCreateWithoutFollowed_usersInput } from "../inputs/UserCreateWithoutFollowed_usersInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedManyWithoutFollowed_usersInput", {
  isAbstract: true
})
export class UserCreateNestedManyWithoutFollowed_usersInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutFollowed_usersInput], {
    nullable: true
  })
  create?: UserCreateWithoutFollowed_usersInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutFollowed_usersInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFollowed_usersInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}

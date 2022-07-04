import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSessionInput } from "../inputs/UserCreateOrConnectWithoutSessionInput";
import { UserCreateWithoutSessionInput } from "../inputs/UserCreateWithoutSessionInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutSessionInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutSessionInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutSessionInput, {
    nullable: true
  })
  create?: UserCreateWithoutSessionInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSessionInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutSessionInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}

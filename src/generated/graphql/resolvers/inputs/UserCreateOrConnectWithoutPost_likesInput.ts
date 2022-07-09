import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPost_likesInput } from "../inputs/UserCreateWithoutPost_likesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutPost_likesInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutPost_likesInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutPost_likesInput, {
    nullable: false
  })
  create!: UserCreateWithoutPost_likesInput;
}

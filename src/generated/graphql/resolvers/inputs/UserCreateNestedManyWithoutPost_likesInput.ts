import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPost_likesInput } from "../inputs/UserCreateOrConnectWithoutPost_likesInput";
import { UserCreateWithoutPost_likesInput } from "../inputs/UserCreateWithoutPost_likesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedManyWithoutPost_likesInput", {
  isAbstract: true
})
export class UserCreateNestedManyWithoutPost_likesInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutPost_likesInput], {
    nullable: true
  })
  create?: UserCreateWithoutPost_likesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutPost_likesInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPost_likesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}

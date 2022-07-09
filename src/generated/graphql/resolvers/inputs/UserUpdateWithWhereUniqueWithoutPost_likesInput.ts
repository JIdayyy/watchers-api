import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutPost_likesInput } from "../inputs/UserUpdateWithoutPost_likesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateWithWhereUniqueWithoutPost_likesInput", {
  isAbstract: true
})
export class UserUpdateWithWhereUniqueWithoutPost_likesInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutPost_likesInput, {
    nullable: false
  })
  data!: UserUpdateWithoutPost_likesInput;
}

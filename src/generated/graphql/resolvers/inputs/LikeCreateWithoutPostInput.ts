import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutLikeInput } from "../inputs/UserCreateNestedOneWithoutLikeInput";

@TypeGraphQL.InputType("LikeCreateWithoutPostInput", {
  isAbstract: true
})
export class LikeCreateWithoutPostInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutLikeInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutLikeInput;
}
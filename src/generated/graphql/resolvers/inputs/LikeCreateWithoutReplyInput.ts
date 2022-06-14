import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedOneWithoutLikeInput } from "../inputs/PostCreateNestedOneWithoutLikeInput";
import { UserCreateNestedOneWithoutLikeInput } from "../inputs/UserCreateNestedOneWithoutLikeInput";

@TypeGraphQL.InputType("LikeCreateWithoutReplyInput", {
  isAbstract: true
})
export class LikeCreateWithoutReplyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutLikeInput, {
    nullable: true
  })
  post?: PostCreateNestedOneWithoutLikeInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutLikeInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutLikeInput;
}

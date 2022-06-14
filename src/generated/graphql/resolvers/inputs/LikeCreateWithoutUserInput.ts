import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedOneWithoutLikeInput } from "../inputs/PostCreateNestedOneWithoutLikeInput";
import { ReplyCreateNestedOneWithoutLikeInput } from "../inputs/ReplyCreateNestedOneWithoutLikeInput";

@TypeGraphQL.InputType("LikeCreateWithoutUserInput", {
  isAbstract: true
})
export class LikeCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutLikeInput, {
    nullable: true
  })
  post?: PostCreateNestedOneWithoutLikeInput | undefined;

  @TypeGraphQL.Field(_type => ReplyCreateNestedOneWithoutLikeInput, {
    nullable: true
  })
  reply?: ReplyCreateNestedOneWithoutLikeInput | undefined;
}

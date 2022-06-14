import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReplyCreateWithoutLikeInput } from "../inputs/ReplyCreateWithoutLikeInput";
import { ReplyUpdateWithoutLikeInput } from "../inputs/ReplyUpdateWithoutLikeInput";

@TypeGraphQL.InputType("ReplyUpsertWithoutLikeInput", {
  isAbstract: true
})
export class ReplyUpsertWithoutLikeInput {
  @TypeGraphQL.Field(_type => ReplyUpdateWithoutLikeInput, {
    nullable: false
  })
  update!: ReplyUpdateWithoutLikeInput;

  @TypeGraphQL.Field(_type => ReplyCreateWithoutLikeInput, {
    nullable: false
  })
  create!: ReplyCreateWithoutLikeInput;
}

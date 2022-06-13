import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReplyCreateWithoutCommentInput } from "../inputs/ReplyCreateWithoutCommentInput";
import { ReplyUpdateWithoutCommentInput } from "../inputs/ReplyUpdateWithoutCommentInput";
import { ReplyWhereUniqueInput } from "../inputs/ReplyWhereUniqueInput";

@TypeGraphQL.InputType("ReplyUpsertWithWhereUniqueWithoutCommentInput", {
  isAbstract: true
})
export class ReplyUpsertWithWhereUniqueWithoutCommentInput {
  @TypeGraphQL.Field(_type => ReplyWhereUniqueInput, {
    nullable: false
  })
  where!: ReplyWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReplyUpdateWithoutCommentInput, {
    nullable: false
  })
  update!: ReplyUpdateWithoutCommentInput;

  @TypeGraphQL.Field(_type => ReplyCreateWithoutCommentInput, {
    nullable: false
  })
  create!: ReplyCreateWithoutCommentInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutReplyInput } from "../inputs/CommentCreateWithoutReplyInput";
import { CommentUpdateWithoutReplyInput } from "../inputs/CommentUpdateWithoutReplyInput";

@TypeGraphQL.InputType("CommentUpsertWithoutReplyInput", {
  isAbstract: true
})
export class CommentUpsertWithoutReplyInput {
  @TypeGraphQL.Field(_type => CommentUpdateWithoutReplyInput, {
    nullable: false
  })
  update!: CommentUpdateWithoutReplyInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutReplyInput, {
    nullable: false
  })
  create!: CommentCreateWithoutReplyInput;
}

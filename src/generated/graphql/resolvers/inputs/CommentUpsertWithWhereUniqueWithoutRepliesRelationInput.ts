import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutRepliesRelationInput } from "../inputs/CommentCreateWithoutRepliesRelationInput";
import { CommentUpdateWithoutRepliesRelationInput } from "../inputs/CommentUpdateWithoutRepliesRelationInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpsertWithWhereUniqueWithoutRepliesRelationInput", {
  isAbstract: true
})
export class CommentUpsertWithWhereUniqueWithoutRepliesRelationInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutRepliesRelationInput, {
    nullable: false
  })
  update!: CommentUpdateWithoutRepliesRelationInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutRepliesRelationInput, {
    nullable: false
  })
  create!: CommentCreateWithoutRepliesRelationInput;
}

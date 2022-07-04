import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutRepliesInput } from "../inputs/CommentCreateWithoutRepliesInput";
import { CommentUpdateWithoutRepliesInput } from "../inputs/CommentUpdateWithoutRepliesInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpsertWithWhereUniqueWithoutRepliesInput", {
  isAbstract: true
})
export class CommentUpsertWithWhereUniqueWithoutRepliesInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutRepliesInput, {
    nullable: false
  })
  update!: CommentUpdateWithoutRepliesInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutRepliesInput, {
    nullable: false
  })
  create!: CommentCreateWithoutRepliesInput;
}

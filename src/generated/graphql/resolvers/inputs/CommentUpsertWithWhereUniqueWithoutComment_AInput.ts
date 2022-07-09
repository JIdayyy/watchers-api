import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutComment_AInput } from "../inputs/CommentCreateWithoutComment_AInput";
import { CommentUpdateWithoutComment_AInput } from "../inputs/CommentUpdateWithoutComment_AInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpsertWithWhereUniqueWithoutComment_AInput", {
  isAbstract: true
})
export class CommentUpsertWithWhereUniqueWithoutComment_AInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutComment_AInput, {
    nullable: false
  })
  update!: CommentUpdateWithoutComment_AInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutComment_AInput, {
    nullable: false
  })
  create!: CommentCreateWithoutComment_AInput;
}

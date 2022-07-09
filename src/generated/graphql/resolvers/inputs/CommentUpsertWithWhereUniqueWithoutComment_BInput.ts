import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutComment_BInput } from "../inputs/CommentCreateWithoutComment_BInput";
import { CommentUpdateWithoutComment_BInput } from "../inputs/CommentUpdateWithoutComment_BInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpsertWithWhereUniqueWithoutComment_BInput", {
  isAbstract: true
})
export class CommentUpsertWithWhereUniqueWithoutComment_BInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutComment_BInput, {
    nullable: false
  })
  update!: CommentUpdateWithoutComment_BInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutComment_BInput, {
    nullable: false
  })
  create!: CommentCreateWithoutComment_BInput;
}

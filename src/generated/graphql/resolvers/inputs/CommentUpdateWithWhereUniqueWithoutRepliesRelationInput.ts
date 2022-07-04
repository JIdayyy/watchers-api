import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateWithoutRepliesRelationInput } from "../inputs/CommentUpdateWithoutRepliesRelationInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateWithWhereUniqueWithoutRepliesRelationInput", {
  isAbstract: true
})
export class CommentUpdateWithWhereUniqueWithoutRepliesRelationInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutRepliesRelationInput, {
    nullable: false
  })
  data!: CommentUpdateWithoutRepliesRelationInput;
}

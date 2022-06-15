import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutRepliesRelationInput } from "../inputs/CommentCreateWithoutRepliesRelationInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateOrConnectWithoutRepliesRelationInput", {
  isAbstract: true
})
export class CommentCreateOrConnectWithoutRepliesRelationInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutRepliesRelationInput, {
    nullable: false
  })
  create!: CommentCreateWithoutRepliesRelationInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateWithoutComment_AInput } from "../inputs/CommentUpdateWithoutComment_AInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateWithWhereUniqueWithoutComment_AInput", {
  isAbstract: true
})
export class CommentUpdateWithWhereUniqueWithoutComment_AInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutComment_AInput, {
    nullable: false
  })
  data!: CommentUpdateWithoutComment_AInput;
}

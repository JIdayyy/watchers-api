import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateWithoutRepliesInput } from "../inputs/CommentUpdateWithoutRepliesInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateWithWhereUniqueWithoutRepliesInput", {
  isAbstract: true
})
export class CommentUpdateWithWhereUniqueWithoutRepliesInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutRepliesInput, {
    nullable: false
  })
  data!: CommentUpdateWithoutRepliesInput;
}

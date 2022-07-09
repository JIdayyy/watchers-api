import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateWithoutComment_BInput } from "../inputs/CommentUpdateWithoutComment_BInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateWithWhereUniqueWithoutComment_BInput", {
  isAbstract: true
})
export class CommentUpdateWithWhereUniqueWithoutComment_BInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutComment_BInput, {
    nullable: false
  })
  data!: CommentUpdateWithoutComment_BInput;
}

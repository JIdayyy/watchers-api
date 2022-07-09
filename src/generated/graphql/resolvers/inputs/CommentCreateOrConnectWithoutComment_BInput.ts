import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutComment_BInput } from "../inputs/CommentCreateWithoutComment_BInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateOrConnectWithoutComment_BInput", {
  isAbstract: true
})
export class CommentCreateOrConnectWithoutComment_BInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutComment_BInput, {
    nullable: false
  })
  create!: CommentCreateWithoutComment_BInput;
}

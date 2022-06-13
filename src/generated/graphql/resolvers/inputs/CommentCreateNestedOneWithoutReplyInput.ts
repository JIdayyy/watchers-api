import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateOrConnectWithoutReplyInput } from "../inputs/CommentCreateOrConnectWithoutReplyInput";
import { CommentCreateWithoutReplyInput } from "../inputs/CommentCreateWithoutReplyInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateNestedOneWithoutReplyInput", {
  isAbstract: true
})
export class CommentCreateNestedOneWithoutReplyInput {
  @TypeGraphQL.Field(_type => CommentCreateWithoutReplyInput, {
    nullable: true
  })
  create?: CommentCreateWithoutReplyInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateOrConnectWithoutReplyInput, {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutReplyInput | undefined;

  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: true
  })
  connect?: CommentWhereUniqueInput | undefined;
}

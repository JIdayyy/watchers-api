import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateOrConnectWithoutRepliesRelationInput } from "../inputs/CommentCreateOrConnectWithoutRepliesRelationInput";
import { CommentCreateWithoutRepliesRelationInput } from "../inputs/CommentCreateWithoutRepliesRelationInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateNestedManyWithoutRepliesRelationInput", {
  isAbstract: true
})
export class CommentCreateNestedManyWithoutRepliesRelationInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutRepliesRelationInput], {
    nullable: true
  })
  create?: CommentCreateWithoutRepliesRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutRepliesRelationInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutRepliesRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;
}

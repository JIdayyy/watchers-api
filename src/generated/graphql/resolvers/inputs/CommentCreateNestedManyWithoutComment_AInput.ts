import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateOrConnectWithoutComment_AInput } from "../inputs/CommentCreateOrConnectWithoutComment_AInput";
import { CommentCreateWithoutComment_AInput } from "../inputs/CommentCreateWithoutComment_AInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateNestedManyWithoutComment_AInput", {
  isAbstract: true
})
export class CommentCreateNestedManyWithoutComment_AInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutComment_AInput], {
    nullable: true
  })
  create?: CommentCreateWithoutComment_AInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutComment_AInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutComment_AInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;
}

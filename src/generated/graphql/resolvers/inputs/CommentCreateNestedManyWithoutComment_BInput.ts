import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateOrConnectWithoutComment_BInput } from "../inputs/CommentCreateOrConnectWithoutComment_BInput";
import { CommentCreateWithoutComment_BInput } from "../inputs/CommentCreateWithoutComment_BInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateNestedManyWithoutComment_BInput", {
  isAbstract: true
})
export class CommentCreateNestedManyWithoutComment_BInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutComment_BInput], {
    nullable: true
  })
  create?: CommentCreateWithoutComment_BInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutComment_BInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutComment_BInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateOrConnectWithoutRepliesRelationInput } from "../inputs/CommentCreateOrConnectWithoutRepliesRelationInput";
import { CommentCreateWithoutRepliesRelationInput } from "../inputs/CommentCreateWithoutRepliesRelationInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutRepliesRelationInput } from "../inputs/CommentUpdateManyWithWhereWithoutRepliesRelationInput";
import { CommentUpdateWithWhereUniqueWithoutRepliesRelationInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutRepliesRelationInput";
import { CommentUpsertWithWhereUniqueWithoutRepliesRelationInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutRepliesRelationInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateManyWithoutRepliesRelationInput", {
  isAbstract: true
})
export class CommentUpdateManyWithoutRepliesRelationInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutRepliesRelationInput], {
    nullable: true
  })
  create?: CommentCreateWithoutRepliesRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutRepliesRelationInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutRepliesRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutRepliesRelationInput], {
    nullable: true
  })
  upsert?: CommentUpsertWithWhereUniqueWithoutRepliesRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  set?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  delete?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutRepliesRelationInput], {
    nullable: true
  })
  update?: CommentUpdateWithWhereUniqueWithoutRepliesRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutRepliesRelationInput], {
    nullable: true
  })
  updateMany?: CommentUpdateManyWithWhereWithoutRepliesRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentScalarWhereInput[] | undefined;
}

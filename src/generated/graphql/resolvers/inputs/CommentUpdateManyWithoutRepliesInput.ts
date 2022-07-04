import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateOrConnectWithoutRepliesInput } from "../inputs/CommentCreateOrConnectWithoutRepliesInput";
import { CommentCreateWithoutRepliesInput } from "../inputs/CommentCreateWithoutRepliesInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutRepliesInput } from "../inputs/CommentUpdateManyWithWhereWithoutRepliesInput";
import { CommentUpdateWithWhereUniqueWithoutRepliesInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutRepliesInput";
import { CommentUpsertWithWhereUniqueWithoutRepliesInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutRepliesInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateManyWithoutRepliesInput", {
  isAbstract: true
})
export class CommentUpdateManyWithoutRepliesInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutRepliesInput], {
    nullable: true
  })
  create?: CommentCreateWithoutRepliesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutRepliesInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutRepliesInput], {
    nullable: true
  })
  upsert?: CommentUpsertWithWhereUniqueWithoutRepliesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutRepliesInput], {
    nullable: true
  })
  update?: CommentUpdateWithWhereUniqueWithoutRepliesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutRepliesInput], {
    nullable: true
  })
  updateMany?: CommentUpdateManyWithWhereWithoutRepliesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentScalarWhereInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReplyCreateManyCommentInputEnvelope } from "../inputs/ReplyCreateManyCommentInputEnvelope";
import { ReplyCreateOrConnectWithoutCommentInput } from "../inputs/ReplyCreateOrConnectWithoutCommentInput";
import { ReplyCreateWithoutCommentInput } from "../inputs/ReplyCreateWithoutCommentInput";
import { ReplyScalarWhereInput } from "../inputs/ReplyScalarWhereInput";
import { ReplyUpdateManyWithWhereWithoutCommentInput } from "../inputs/ReplyUpdateManyWithWhereWithoutCommentInput";
import { ReplyUpdateWithWhereUniqueWithoutCommentInput } from "../inputs/ReplyUpdateWithWhereUniqueWithoutCommentInput";
import { ReplyUpsertWithWhereUniqueWithoutCommentInput } from "../inputs/ReplyUpsertWithWhereUniqueWithoutCommentInput";
import { ReplyWhereUniqueInput } from "../inputs/ReplyWhereUniqueInput";

@TypeGraphQL.InputType("ReplyUpdateManyWithoutCommentInput", {
  isAbstract: true
})
export class ReplyUpdateManyWithoutCommentInput {
  @TypeGraphQL.Field(_type => [ReplyCreateWithoutCommentInput], {
    nullable: true
  })
  create?: ReplyCreateWithoutCommentInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReplyCreateOrConnectWithoutCommentInput], {
    nullable: true
  })
  connectOrCreate?: ReplyCreateOrConnectWithoutCommentInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReplyUpsertWithWhereUniqueWithoutCommentInput], {
    nullable: true
  })
  upsert?: ReplyUpsertWithWhereUniqueWithoutCommentInput[] | undefined;

  @TypeGraphQL.Field(_type => ReplyCreateManyCommentInputEnvelope, {
    nullable: true
  })
  createMany?: ReplyCreateManyCommentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReplyWhereUniqueInput], {
    nullable: true
  })
  set?: ReplyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReplyWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ReplyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReplyWhereUniqueInput], {
    nullable: true
  })
  delete?: ReplyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReplyWhereUniqueInput], {
    nullable: true
  })
  connect?: ReplyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReplyUpdateWithWhereUniqueWithoutCommentInput], {
    nullable: true
  })
  update?: ReplyUpdateWithWhereUniqueWithoutCommentInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReplyUpdateManyWithWhereWithoutCommentInput], {
    nullable: true
  })
  updateMany?: ReplyUpdateManyWithWhereWithoutCommentInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReplyScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ReplyScalarWhereInput[] | undefined;
}

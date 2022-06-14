import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeCreateManyReplyInputEnvelope } from "../inputs/LikeCreateManyReplyInputEnvelope";
import { LikeCreateOrConnectWithoutReplyInput } from "../inputs/LikeCreateOrConnectWithoutReplyInput";
import { LikeCreateWithoutReplyInput } from "../inputs/LikeCreateWithoutReplyInput";
import { LikeScalarWhereInput } from "../inputs/LikeScalarWhereInput";
import { LikeUpdateManyWithWhereWithoutReplyInput } from "../inputs/LikeUpdateManyWithWhereWithoutReplyInput";
import { LikeUpdateWithWhereUniqueWithoutReplyInput } from "../inputs/LikeUpdateWithWhereUniqueWithoutReplyInput";
import { LikeUpsertWithWhereUniqueWithoutReplyInput } from "../inputs/LikeUpsertWithWhereUniqueWithoutReplyInput";
import { LikeWhereUniqueInput } from "../inputs/LikeWhereUniqueInput";

@TypeGraphQL.InputType("LikeUpdateManyWithoutReplyInput", {
  isAbstract: true
})
export class LikeUpdateManyWithoutReplyInput {
  @TypeGraphQL.Field(_type => [LikeCreateWithoutReplyInput], {
    nullable: true
  })
  create?: LikeCreateWithoutReplyInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeCreateOrConnectWithoutReplyInput], {
    nullable: true
  })
  connectOrCreate?: LikeCreateOrConnectWithoutReplyInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeUpsertWithWhereUniqueWithoutReplyInput], {
    nullable: true
  })
  upsert?: LikeUpsertWithWhereUniqueWithoutReplyInput[] | undefined;

  @TypeGraphQL.Field(_type => LikeCreateManyReplyInputEnvelope, {
    nullable: true
  })
  createMany?: LikeCreateManyReplyInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LikeWhereUniqueInput], {
    nullable: true
  })
  set?: LikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: LikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeWhereUniqueInput], {
    nullable: true
  })
  delete?: LikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeWhereUniqueInput], {
    nullable: true
  })
  connect?: LikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeUpdateWithWhereUniqueWithoutReplyInput], {
    nullable: true
  })
  update?: LikeUpdateWithWhereUniqueWithoutReplyInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeUpdateManyWithWhereWithoutReplyInput], {
    nullable: true
  })
  updateMany?: LikeUpdateManyWithWhereWithoutReplyInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LikeScalarWhereInput[] | undefined;
}

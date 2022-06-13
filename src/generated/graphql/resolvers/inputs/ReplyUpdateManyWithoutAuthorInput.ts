import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReplyCreateManyAuthorInputEnvelope } from "../inputs/ReplyCreateManyAuthorInputEnvelope";
import { ReplyCreateOrConnectWithoutAuthorInput } from "../inputs/ReplyCreateOrConnectWithoutAuthorInput";
import { ReplyCreateWithoutAuthorInput } from "../inputs/ReplyCreateWithoutAuthorInput";
import { ReplyScalarWhereInput } from "../inputs/ReplyScalarWhereInput";
import { ReplyUpdateManyWithWhereWithoutAuthorInput } from "../inputs/ReplyUpdateManyWithWhereWithoutAuthorInput";
import { ReplyUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/ReplyUpdateWithWhereUniqueWithoutAuthorInput";
import { ReplyUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/ReplyUpsertWithWhereUniqueWithoutAuthorInput";
import { ReplyWhereUniqueInput } from "../inputs/ReplyWhereUniqueInput";

@TypeGraphQL.InputType("ReplyUpdateManyWithoutAuthorInput", {
  isAbstract: true
})
export class ReplyUpdateManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [ReplyCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: ReplyCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReplyCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: ReplyCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReplyUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  upsert?: ReplyUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => ReplyCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: ReplyCreateManyAuthorInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ReplyUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  update?: ReplyUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReplyUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true
  })
  updateMany?: ReplyUpdateManyWithWhereWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReplyScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ReplyScalarWhereInput[] | undefined;
}

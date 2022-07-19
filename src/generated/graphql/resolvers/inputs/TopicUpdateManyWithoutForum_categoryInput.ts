import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateManyForum_categoryInputEnvelope } from "../inputs/TopicCreateManyForum_categoryInputEnvelope";
import { TopicCreateOrConnectWithoutForum_categoryInput } from "../inputs/TopicCreateOrConnectWithoutForum_categoryInput";
import { TopicCreateWithoutForum_categoryInput } from "../inputs/TopicCreateWithoutForum_categoryInput";
import { TopicScalarWhereInput } from "../inputs/TopicScalarWhereInput";
import { TopicUpdateManyWithWhereWithoutForum_categoryInput } from "../inputs/TopicUpdateManyWithWhereWithoutForum_categoryInput";
import { TopicUpdateWithWhereUniqueWithoutForum_categoryInput } from "../inputs/TopicUpdateWithWhereUniqueWithoutForum_categoryInput";
import { TopicUpsertWithWhereUniqueWithoutForum_categoryInput } from "../inputs/TopicUpsertWithWhereUniqueWithoutForum_categoryInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";

@TypeGraphQL.InputType("TopicUpdateManyWithoutForum_categoryInput", {
  isAbstract: true
})
export class TopicUpdateManyWithoutForum_categoryInput {
  @TypeGraphQL.Field(_type => [TopicCreateWithoutForum_categoryInput], {
    nullable: true
  })
  create?: TopicCreateWithoutForum_categoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicCreateOrConnectWithoutForum_categoryInput], {
    nullable: true
  })
  connectOrCreate?: TopicCreateOrConnectWithoutForum_categoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicUpsertWithWhereUniqueWithoutForum_categoryInput], {
    nullable: true
  })
  upsert?: TopicUpsertWithWhereUniqueWithoutForum_categoryInput[] | undefined;

  @TypeGraphQL.Field(_type => TopicCreateManyForum_categoryInputEnvelope, {
    nullable: true
  })
  createMany?: TopicCreateManyForum_categoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TopicWhereUniqueInput], {
    nullable: true
  })
  set?: TopicWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TopicWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicWhereUniqueInput], {
    nullable: true
  })
  delete?: TopicWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicWhereUniqueInput], {
    nullable: true
  })
  connect?: TopicWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicUpdateWithWhereUniqueWithoutForum_categoryInput], {
    nullable: true
  })
  update?: TopicUpdateWithWhereUniqueWithoutForum_categoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicUpdateManyWithWhereWithoutForum_categoryInput], {
    nullable: true
  })
  updateMany?: TopicUpdateManyWithWhereWithoutForum_categoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TopicScalarWhereInput[] | undefined;
}

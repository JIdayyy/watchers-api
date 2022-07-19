import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateOrConnectWithoutModeratorsInput } from "../inputs/TopicCreateOrConnectWithoutModeratorsInput";
import { TopicCreateWithoutModeratorsInput } from "../inputs/TopicCreateWithoutModeratorsInput";
import { TopicScalarWhereInput } from "../inputs/TopicScalarWhereInput";
import { TopicUpdateManyWithWhereWithoutModeratorsInput } from "../inputs/TopicUpdateManyWithWhereWithoutModeratorsInput";
import { TopicUpdateWithWhereUniqueWithoutModeratorsInput } from "../inputs/TopicUpdateWithWhereUniqueWithoutModeratorsInput";
import { TopicUpsertWithWhereUniqueWithoutModeratorsInput } from "../inputs/TopicUpsertWithWhereUniqueWithoutModeratorsInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";

@TypeGraphQL.InputType("TopicUpdateManyWithoutModeratorsInput", {
  isAbstract: true
})
export class TopicUpdateManyWithoutModeratorsInput {
  @TypeGraphQL.Field(_type => [TopicCreateWithoutModeratorsInput], {
    nullable: true
  })
  create?: TopicCreateWithoutModeratorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicCreateOrConnectWithoutModeratorsInput], {
    nullable: true
  })
  connectOrCreate?: TopicCreateOrConnectWithoutModeratorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicUpsertWithWhereUniqueWithoutModeratorsInput], {
    nullable: true
  })
  upsert?: TopicUpsertWithWhereUniqueWithoutModeratorsInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [TopicUpdateWithWhereUniqueWithoutModeratorsInput], {
    nullable: true
  })
  update?: TopicUpdateWithWhereUniqueWithoutModeratorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicUpdateManyWithWhereWithoutModeratorsInput], {
    nullable: true
  })
  updateMany?: TopicUpdateManyWithWhereWithoutModeratorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TopicScalarWhereInput[] | undefined;
}

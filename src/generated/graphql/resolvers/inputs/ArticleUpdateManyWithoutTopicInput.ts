import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArticleCreateManyTopicInputEnvelope } from "../inputs/ArticleCreateManyTopicInputEnvelope";
import { ArticleCreateOrConnectWithoutTopicInput } from "../inputs/ArticleCreateOrConnectWithoutTopicInput";
import { ArticleCreateWithoutTopicInput } from "../inputs/ArticleCreateWithoutTopicInput";
import { ArticleScalarWhereInput } from "../inputs/ArticleScalarWhereInput";
import { ArticleUpdateManyWithWhereWithoutTopicInput } from "../inputs/ArticleUpdateManyWithWhereWithoutTopicInput";
import { ArticleUpdateWithWhereUniqueWithoutTopicInput } from "../inputs/ArticleUpdateWithWhereUniqueWithoutTopicInput";
import { ArticleUpsertWithWhereUniqueWithoutTopicInput } from "../inputs/ArticleUpsertWithWhereUniqueWithoutTopicInput";
import { ArticleWhereUniqueInput } from "../inputs/ArticleWhereUniqueInput";

@TypeGraphQL.InputType("ArticleUpdateManyWithoutTopicInput", {
  isAbstract: true
})
export class ArticleUpdateManyWithoutTopicInput {
  @TypeGraphQL.Field(_type => [ArticleCreateWithoutTopicInput], {
    nullable: true
  })
  create?: ArticleCreateWithoutTopicInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArticleCreateOrConnectWithoutTopicInput], {
    nullable: true
  })
  connectOrCreate?: ArticleCreateOrConnectWithoutTopicInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArticleUpsertWithWhereUniqueWithoutTopicInput], {
    nullable: true
  })
  upsert?: ArticleUpsertWithWhereUniqueWithoutTopicInput[] | undefined;

  @TypeGraphQL.Field(_type => ArticleCreateManyTopicInputEnvelope, {
    nullable: true
  })
  createMany?: ArticleCreateManyTopicInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ArticleWhereUniqueInput], {
    nullable: true
  })
  set?: ArticleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArticleWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ArticleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArticleWhereUniqueInput], {
    nullable: true
  })
  delete?: ArticleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArticleWhereUniqueInput], {
    nullable: true
  })
  connect?: ArticleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArticleUpdateWithWhereUniqueWithoutTopicInput], {
    nullable: true
  })
  update?: ArticleUpdateWithWhereUniqueWithoutTopicInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArticleUpdateManyWithWhereWithoutTopicInput], {
    nullable: true
  })
  updateMany?: ArticleUpdateManyWithWhereWithoutTopicInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArticleScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ArticleScalarWhereInput[] | undefined;
}

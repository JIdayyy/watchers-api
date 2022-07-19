import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArticleCreateManyAuthorInputEnvelope } from "../inputs/ArticleCreateManyAuthorInputEnvelope";
import { ArticleCreateOrConnectWithoutAuthorInput } from "../inputs/ArticleCreateOrConnectWithoutAuthorInput";
import { ArticleCreateWithoutAuthorInput } from "../inputs/ArticleCreateWithoutAuthorInput";
import { ArticleScalarWhereInput } from "../inputs/ArticleScalarWhereInput";
import { ArticleUpdateManyWithWhereWithoutAuthorInput } from "../inputs/ArticleUpdateManyWithWhereWithoutAuthorInput";
import { ArticleUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/ArticleUpdateWithWhereUniqueWithoutAuthorInput";
import { ArticleUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/ArticleUpsertWithWhereUniqueWithoutAuthorInput";
import { ArticleWhereUniqueInput } from "../inputs/ArticleWhereUniqueInput";

@TypeGraphQL.InputType("ArticleUpdateManyWithoutAuthorInput", {
  isAbstract: true
})
export class ArticleUpdateManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [ArticleCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: ArticleCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArticleCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: ArticleCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArticleUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  upsert?: ArticleUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => ArticleCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: ArticleCreateManyAuthorInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ArticleUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  update?: ArticleUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArticleUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true
  })
  updateMany?: ArticleUpdateManyWithWhereWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArticleScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ArticleScalarWhereInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForumCategoryCreateManyForumInputEnvelope } from "../inputs/ForumCategoryCreateManyForumInputEnvelope";
import { ForumCategoryCreateOrConnectWithoutForumInput } from "../inputs/ForumCategoryCreateOrConnectWithoutForumInput";
import { ForumCategoryCreateWithoutForumInput } from "../inputs/ForumCategoryCreateWithoutForumInput";
import { ForumCategoryScalarWhereInput } from "../inputs/ForumCategoryScalarWhereInput";
import { ForumCategoryUpdateManyWithWhereWithoutForumInput } from "../inputs/ForumCategoryUpdateManyWithWhereWithoutForumInput";
import { ForumCategoryUpdateWithWhereUniqueWithoutForumInput } from "../inputs/ForumCategoryUpdateWithWhereUniqueWithoutForumInput";
import { ForumCategoryUpsertWithWhereUniqueWithoutForumInput } from "../inputs/ForumCategoryUpsertWithWhereUniqueWithoutForumInput";
import { ForumCategoryWhereUniqueInput } from "../inputs/ForumCategoryWhereUniqueInput";

@TypeGraphQL.InputType("ForumCategoryUpdateManyWithoutForumInput", {
  isAbstract: true
})
export class ForumCategoryUpdateManyWithoutForumInput {
  @TypeGraphQL.Field(_type => [ForumCategoryCreateWithoutForumInput], {
    nullable: true
  })
  create?: ForumCategoryCreateWithoutForumInput[] | undefined;

  @TypeGraphQL.Field(_type => [ForumCategoryCreateOrConnectWithoutForumInput], {
    nullable: true
  })
  connectOrCreate?: ForumCategoryCreateOrConnectWithoutForumInput[] | undefined;

  @TypeGraphQL.Field(_type => [ForumCategoryUpsertWithWhereUniqueWithoutForumInput], {
    nullable: true
  })
  upsert?: ForumCategoryUpsertWithWhereUniqueWithoutForumInput[] | undefined;

  @TypeGraphQL.Field(_type => ForumCategoryCreateManyForumInputEnvelope, {
    nullable: true
  })
  createMany?: ForumCategoryCreateManyForumInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ForumCategoryWhereUniqueInput], {
    nullable: true
  })
  set?: ForumCategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ForumCategoryWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ForumCategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ForumCategoryWhereUniqueInput], {
    nullable: true
  })
  delete?: ForumCategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ForumCategoryWhereUniqueInput], {
    nullable: true
  })
  connect?: ForumCategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ForumCategoryUpdateWithWhereUniqueWithoutForumInput], {
    nullable: true
  })
  update?: ForumCategoryUpdateWithWhereUniqueWithoutForumInput[] | undefined;

  @TypeGraphQL.Field(_type => [ForumCategoryUpdateManyWithWhereWithoutForumInput], {
    nullable: true
  })
  updateMany?: ForumCategoryUpdateManyWithWhereWithoutForumInput[] | undefined;

  @TypeGraphQL.Field(_type => [ForumCategoryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ForumCategoryScalarWhereInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyCategoryInputEnvelope } from "../inputs/PostCreateManyCategoryInputEnvelope";
import { PostCreateOrConnectWithoutCategoryInput } from "../inputs/PostCreateOrConnectWithoutCategoryInput";
import { PostCreateWithoutCategoryInput } from "../inputs/PostCreateWithoutCategoryInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereWithoutCategoryInput } from "../inputs/PostUpdateManyWithWhereWithoutCategoryInput";
import { PostUpdateWithWhereUniqueWithoutCategoryInput } from "../inputs/PostUpdateWithWhereUniqueWithoutCategoryInput";
import { PostUpsertWithWhereUniqueWithoutCategoryInput } from "../inputs/PostUpsertWithWhereUniqueWithoutCategoryInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateManyWithoutCategoryInput", {
  isAbstract: true
})
export class PostUpdateManyWithoutCategoryInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutCategoryInput], {
    nullable: true
  })
  create?: PostCreateWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutCategoryInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutCategoryInput], {
    nullable: true
  })
  upsert?: PostUpsertWithWhereUniqueWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCreateManyCategoryInputEnvelope, {
    nullable: true
  })
  createMany?: PostCreateManyCategoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  set?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  delete?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutCategoryInput], {
    nullable: true
  })
  update?: PostUpdateWithWhereUniqueWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutCategoryInput], {
    nullable: true
  })
  updateMany?: PostUpdateManyWithWhereWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostScalarWhereInput[] | undefined;
}

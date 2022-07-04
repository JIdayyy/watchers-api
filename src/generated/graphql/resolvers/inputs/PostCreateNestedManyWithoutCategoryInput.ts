import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyCategoryInputEnvelope } from "../inputs/PostCreateManyCategoryInputEnvelope";
import { PostCreateOrConnectWithoutCategoryInput } from "../inputs/PostCreateOrConnectWithoutCategoryInput";
import { PostCreateWithoutCategoryInput } from "../inputs/PostCreateWithoutCategoryInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateNestedManyWithoutCategoryInput", {
  isAbstract: true
})
export class PostCreateNestedManyWithoutCategoryInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutCategoryInput], {
    nullable: true
  })
  create?: PostCreateWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutCategoryInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCreateManyCategoryInputEnvelope, {
    nullable: true
  })
  createMany?: PostCreateManyCategoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutCategoryInput } from "../inputs/PostCreateWithoutCategoryInput";
import { PostUpdateWithoutCategoryInput } from "../inputs/PostUpdateWithoutCategoryInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpsertWithWhereUniqueWithoutCategoryInput", {
  isAbstract: true
})
export class PostUpsertWithWhereUniqueWithoutCategoryInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUpdateWithoutCategoryInput, {
    nullable: false
  })
  update!: PostUpdateWithoutCategoryInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutCategoryInput, {
    nullable: false
  })
  create!: PostCreateWithoutCategoryInput;
}

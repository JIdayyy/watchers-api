import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForumCategoryCreateWithoutForumInput } from "../inputs/ForumCategoryCreateWithoutForumInput";
import { ForumCategoryUpdateWithoutForumInput } from "../inputs/ForumCategoryUpdateWithoutForumInput";
import { ForumCategoryWhereUniqueInput } from "../inputs/ForumCategoryWhereUniqueInput";

@TypeGraphQL.InputType("ForumCategoryUpsertWithWhereUniqueWithoutForumInput", {
  isAbstract: true
})
export class ForumCategoryUpsertWithWhereUniqueWithoutForumInput {
  @TypeGraphQL.Field(_type => ForumCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: ForumCategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => ForumCategoryUpdateWithoutForumInput, {
    nullable: false
  })
  update!: ForumCategoryUpdateWithoutForumInput;

  @TypeGraphQL.Field(_type => ForumCategoryCreateWithoutForumInput, {
    nullable: false
  })
  create!: ForumCategoryCreateWithoutForumInput;
}

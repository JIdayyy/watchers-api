import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArticleCreateNestedManyWithoutTopicInput } from "../inputs/ArticleCreateNestedManyWithoutTopicInput";
import { ForumCategoryCreateNestedOneWithoutTopicsInput } from "../inputs/ForumCategoryCreateNestedOneWithoutTopicsInput";

@TypeGraphQL.InputType("TopicCreateWithoutModeratorsInput", {
  isAbstract: true
})
export class TopicCreateWithoutModeratorsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => ForumCategoryCreateNestedOneWithoutTopicsInput, {
    nullable: true
  })
  forum_category?: ForumCategoryCreateNestedOneWithoutTopicsInput | undefined;

  @TypeGraphQL.Field(_type => ArticleCreateNestedManyWithoutTopicInput, {
    nullable: true
  })
  articles?: ArticleCreateNestedManyWithoutTopicInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  is_disabled?: boolean | undefined;
}

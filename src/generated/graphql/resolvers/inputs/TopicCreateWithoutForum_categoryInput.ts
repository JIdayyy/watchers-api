import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArticleCreateNestedManyWithoutTopicInput } from "../inputs/ArticleCreateNestedManyWithoutTopicInput";
import { UserCreateNestedManyWithoutTopics_moderatedInput } from "../inputs/UserCreateNestedManyWithoutTopics_moderatedInput";

@TypeGraphQL.InputType("TopicCreateWithoutForum_categoryInput", {
  isAbstract: true
})
export class TopicCreateWithoutForum_categoryInput {
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

  @TypeGraphQL.Field(_type => ArticleCreateNestedManyWithoutTopicInput, {
    nullable: true
  })
  articles?: ArticleCreateNestedManyWithoutTopicInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  is_disabled?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutTopics_moderatedInput, {
    nullable: true
  })
  moderators?: UserCreateNestedManyWithoutTopics_moderatedInput | undefined;
}

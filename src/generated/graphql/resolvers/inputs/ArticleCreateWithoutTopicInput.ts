import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutForum_articlesInput } from "../inputs/UserCreateNestedOneWithoutForum_articlesInput";

@TypeGraphQL.InputType("ArticleCreateWithoutTopicInput", {
  isAbstract: true
})
export class ArticleCreateWithoutTopicInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutForum_articlesInput, {
    nullable: false
  })
  author!: UserCreateNestedOneWithoutForum_articlesInput;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  is_disabled?: boolean | undefined;
}

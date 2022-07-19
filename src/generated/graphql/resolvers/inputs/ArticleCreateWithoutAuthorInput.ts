import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateNestedOneWithoutArticlesInput } from "../inputs/TopicCreateNestedOneWithoutArticlesInput";

@TypeGraphQL.InputType("ArticleCreateWithoutAuthorInput", {
  isAbstract: true
})
export class ArticleCreateWithoutAuthorInput {
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

  @TypeGraphQL.Field(_type => TopicCreateNestedOneWithoutArticlesInput, {
    nullable: true
  })
  topic?: TopicCreateNestedOneWithoutArticlesInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  is_disabled?: boolean | undefined;
}

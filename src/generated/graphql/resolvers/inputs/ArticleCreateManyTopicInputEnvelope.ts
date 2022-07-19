import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArticleCreateManyTopicInput } from "../inputs/ArticleCreateManyTopicInput";

@TypeGraphQL.InputType("ArticleCreateManyTopicInputEnvelope", {
  isAbstract: true
})
export class ArticleCreateManyTopicInputEnvelope {
  @TypeGraphQL.Field(_type => [ArticleCreateManyTopicInput], {
    nullable: false
  })
  data!: ArticleCreateManyTopicInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

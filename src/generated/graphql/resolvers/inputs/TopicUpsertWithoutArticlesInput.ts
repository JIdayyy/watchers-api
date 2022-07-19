import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateWithoutArticlesInput } from "../inputs/TopicCreateWithoutArticlesInput";
import { TopicUpdateWithoutArticlesInput } from "../inputs/TopicUpdateWithoutArticlesInput";

@TypeGraphQL.InputType("TopicUpsertWithoutArticlesInput", {
  isAbstract: true
})
export class TopicUpsertWithoutArticlesInput {
  @TypeGraphQL.Field(_type => TopicUpdateWithoutArticlesInput, {
    nullable: false
  })
  update!: TopicUpdateWithoutArticlesInput;

  @TypeGraphQL.Field(_type => TopicCreateWithoutArticlesInput, {
    nullable: false
  })
  create!: TopicCreateWithoutArticlesInput;
}

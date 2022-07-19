import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateWithoutArticlesInput } from "../inputs/TopicCreateWithoutArticlesInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";

@TypeGraphQL.InputType("TopicCreateOrConnectWithoutArticlesInput", {
  isAbstract: true
})
export class TopicCreateOrConnectWithoutArticlesInput {
  @TypeGraphQL.Field(_type => TopicWhereUniqueInput, {
    nullable: false
  })
  where!: TopicWhereUniqueInput;

  @TypeGraphQL.Field(_type => TopicCreateWithoutArticlesInput, {
    nullable: false
  })
  create!: TopicCreateWithoutArticlesInput;
}

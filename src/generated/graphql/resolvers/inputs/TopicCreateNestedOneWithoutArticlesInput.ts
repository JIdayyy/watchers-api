import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateOrConnectWithoutArticlesInput } from "../inputs/TopicCreateOrConnectWithoutArticlesInput";
import { TopicCreateWithoutArticlesInput } from "../inputs/TopicCreateWithoutArticlesInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";

@TypeGraphQL.InputType("TopicCreateNestedOneWithoutArticlesInput", {
  isAbstract: true
})
export class TopicCreateNestedOneWithoutArticlesInput {
  @TypeGraphQL.Field(_type => TopicCreateWithoutArticlesInput, {
    nullable: true
  })
  create?: TopicCreateWithoutArticlesInput | undefined;

  @TypeGraphQL.Field(_type => TopicCreateOrConnectWithoutArticlesInput, {
    nullable: true
  })
  connectOrCreate?: TopicCreateOrConnectWithoutArticlesInput | undefined;

  @TypeGraphQL.Field(_type => TopicWhereUniqueInput, {
    nullable: true
  })
  connect?: TopicWhereUniqueInput | undefined;
}

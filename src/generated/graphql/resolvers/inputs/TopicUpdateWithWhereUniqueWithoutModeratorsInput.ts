import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicUpdateWithoutModeratorsInput } from "../inputs/TopicUpdateWithoutModeratorsInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";

@TypeGraphQL.InputType("TopicUpdateWithWhereUniqueWithoutModeratorsInput", {
  isAbstract: true
})
export class TopicUpdateWithWhereUniqueWithoutModeratorsInput {
  @TypeGraphQL.Field(_type => TopicWhereUniqueInput, {
    nullable: false
  })
  where!: TopicWhereUniqueInput;

  @TypeGraphQL.Field(_type => TopicUpdateWithoutModeratorsInput, {
    nullable: false
  })
  data!: TopicUpdateWithoutModeratorsInput;
}

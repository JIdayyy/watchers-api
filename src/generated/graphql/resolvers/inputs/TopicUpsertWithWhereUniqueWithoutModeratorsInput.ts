import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateWithoutModeratorsInput } from "../inputs/TopicCreateWithoutModeratorsInput";
import { TopicUpdateWithoutModeratorsInput } from "../inputs/TopicUpdateWithoutModeratorsInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";

@TypeGraphQL.InputType("TopicUpsertWithWhereUniqueWithoutModeratorsInput", {
  isAbstract: true
})
export class TopicUpsertWithWhereUniqueWithoutModeratorsInput {
  @TypeGraphQL.Field(_type => TopicWhereUniqueInput, {
    nullable: false
  })
  where!: TopicWhereUniqueInput;

  @TypeGraphQL.Field(_type => TopicUpdateWithoutModeratorsInput, {
    nullable: false
  })
  update!: TopicUpdateWithoutModeratorsInput;

  @TypeGraphQL.Field(_type => TopicCreateWithoutModeratorsInput, {
    nullable: false
  })
  create!: TopicCreateWithoutModeratorsInput;
}

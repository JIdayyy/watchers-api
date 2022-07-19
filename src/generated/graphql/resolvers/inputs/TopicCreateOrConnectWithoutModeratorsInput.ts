import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateWithoutModeratorsInput } from "../inputs/TopicCreateWithoutModeratorsInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";

@TypeGraphQL.InputType("TopicCreateOrConnectWithoutModeratorsInput", {
  isAbstract: true
})
export class TopicCreateOrConnectWithoutModeratorsInput {
  @TypeGraphQL.Field(_type => TopicWhereUniqueInput, {
    nullable: false
  })
  where!: TopicWhereUniqueInput;

  @TypeGraphQL.Field(_type => TopicCreateWithoutModeratorsInput, {
    nullable: false
  })
  create!: TopicCreateWithoutModeratorsInput;
}

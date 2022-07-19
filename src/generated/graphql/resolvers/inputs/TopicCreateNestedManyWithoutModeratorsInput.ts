import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateOrConnectWithoutModeratorsInput } from "../inputs/TopicCreateOrConnectWithoutModeratorsInput";
import { TopicCreateWithoutModeratorsInput } from "../inputs/TopicCreateWithoutModeratorsInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";

@TypeGraphQL.InputType("TopicCreateNestedManyWithoutModeratorsInput", {
  isAbstract: true
})
export class TopicCreateNestedManyWithoutModeratorsInput {
  @TypeGraphQL.Field(_type => [TopicCreateWithoutModeratorsInput], {
    nullable: true
  })
  create?: TopicCreateWithoutModeratorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicCreateOrConnectWithoutModeratorsInput], {
    nullable: true
  })
  connectOrCreate?: TopicCreateOrConnectWithoutModeratorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicWhereUniqueInput], {
    nullable: true
  })
  connect?: TopicWhereUniqueInput[] | undefined;
}

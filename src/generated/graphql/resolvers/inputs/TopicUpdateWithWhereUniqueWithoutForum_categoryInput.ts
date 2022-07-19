import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicUpdateWithoutForum_categoryInput } from "../inputs/TopicUpdateWithoutForum_categoryInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";

@TypeGraphQL.InputType("TopicUpdateWithWhereUniqueWithoutForum_categoryInput", {
  isAbstract: true
})
export class TopicUpdateWithWhereUniqueWithoutForum_categoryInput {
  @TypeGraphQL.Field(_type => TopicWhereUniqueInput, {
    nullable: false
  })
  where!: TopicWhereUniqueInput;

  @TypeGraphQL.Field(_type => TopicUpdateWithoutForum_categoryInput, {
    nullable: false
  })
  data!: TopicUpdateWithoutForum_categoryInput;
}

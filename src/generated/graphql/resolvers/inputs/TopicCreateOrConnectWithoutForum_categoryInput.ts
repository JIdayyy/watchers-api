import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateWithoutForum_categoryInput } from "../inputs/TopicCreateWithoutForum_categoryInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";

@TypeGraphQL.InputType("TopicCreateOrConnectWithoutForum_categoryInput", {
  isAbstract: true
})
export class TopicCreateOrConnectWithoutForum_categoryInput {
  @TypeGraphQL.Field(_type => TopicWhereUniqueInput, {
    nullable: false
  })
  where!: TopicWhereUniqueInput;

  @TypeGraphQL.Field(_type => TopicCreateWithoutForum_categoryInput, {
    nullable: false
  })
  create!: TopicCreateWithoutForum_categoryInput;
}

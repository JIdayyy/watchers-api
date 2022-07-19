import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateManyForum_categoryInputEnvelope } from "../inputs/TopicCreateManyForum_categoryInputEnvelope";
import { TopicCreateOrConnectWithoutForum_categoryInput } from "../inputs/TopicCreateOrConnectWithoutForum_categoryInput";
import { TopicCreateWithoutForum_categoryInput } from "../inputs/TopicCreateWithoutForum_categoryInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";

@TypeGraphQL.InputType("TopicCreateNestedManyWithoutForum_categoryInput", {
  isAbstract: true
})
export class TopicCreateNestedManyWithoutForum_categoryInput {
  @TypeGraphQL.Field(_type => [TopicCreateWithoutForum_categoryInput], {
    nullable: true
  })
  create?: TopicCreateWithoutForum_categoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicCreateOrConnectWithoutForum_categoryInput], {
    nullable: true
  })
  connectOrCreate?: TopicCreateOrConnectWithoutForum_categoryInput[] | undefined;

  @TypeGraphQL.Field(_type => TopicCreateManyForum_categoryInputEnvelope, {
    nullable: true
  })
  createMany?: TopicCreateManyForum_categoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TopicWhereUniqueInput], {
    nullable: true
  })
  connect?: TopicWhereUniqueInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateManyForum_categoryInput } from "../inputs/TopicCreateManyForum_categoryInput";

@TypeGraphQL.InputType("TopicCreateManyForum_categoryInputEnvelope", {
  isAbstract: true
})
export class TopicCreateManyForum_categoryInputEnvelope {
  @TypeGraphQL.Field(_type => [TopicCreateManyForum_categoryInput], {
    nullable: false
  })
  data!: TopicCreateManyForum_categoryInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

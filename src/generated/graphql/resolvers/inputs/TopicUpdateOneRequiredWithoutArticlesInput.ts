import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateOrConnectWithoutArticlesInput } from "../inputs/TopicCreateOrConnectWithoutArticlesInput";
import { TopicCreateWithoutArticlesInput } from "../inputs/TopicCreateWithoutArticlesInput";
import { TopicUpdateWithoutArticlesInput } from "../inputs/TopicUpdateWithoutArticlesInput";
import { TopicUpsertWithoutArticlesInput } from "../inputs/TopicUpsertWithoutArticlesInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";

@TypeGraphQL.InputType("TopicUpdateOneRequiredWithoutArticlesInput", {
  isAbstract: true
})
export class TopicUpdateOneRequiredWithoutArticlesInput {
  @TypeGraphQL.Field(_type => TopicCreateWithoutArticlesInput, {
    nullable: true
  })
  create?: TopicCreateWithoutArticlesInput | undefined;

  @TypeGraphQL.Field(_type => TopicCreateOrConnectWithoutArticlesInput, {
    nullable: true
  })
  connectOrCreate?: TopicCreateOrConnectWithoutArticlesInput | undefined;

  @TypeGraphQL.Field(_type => TopicUpsertWithoutArticlesInput, {
    nullable: true
  })
  upsert?: TopicUpsertWithoutArticlesInput | undefined;

  @TypeGraphQL.Field(_type => TopicWhereUniqueInput, {
    nullable: true
  })
  connect?: TopicWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TopicUpdateWithoutArticlesInput, {
    nullable: true
  })
  update?: TopicUpdateWithoutArticlesInput | undefined;
}

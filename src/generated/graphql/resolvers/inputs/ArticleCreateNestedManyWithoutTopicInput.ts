import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArticleCreateManyTopicInputEnvelope } from "../inputs/ArticleCreateManyTopicInputEnvelope";
import { ArticleCreateOrConnectWithoutTopicInput } from "../inputs/ArticleCreateOrConnectWithoutTopicInput";
import { ArticleCreateWithoutTopicInput } from "../inputs/ArticleCreateWithoutTopicInput";
import { ArticleWhereUniqueInput } from "../inputs/ArticleWhereUniqueInput";

@TypeGraphQL.InputType("ArticleCreateNestedManyWithoutTopicInput", {
  isAbstract: true
})
export class ArticleCreateNestedManyWithoutTopicInput {
  @TypeGraphQL.Field(_type => [ArticleCreateWithoutTopicInput], {
    nullable: true
  })
  create?: ArticleCreateWithoutTopicInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArticleCreateOrConnectWithoutTopicInput], {
    nullable: true
  })
  connectOrCreate?: ArticleCreateOrConnectWithoutTopicInput[] | undefined;

  @TypeGraphQL.Field(_type => ArticleCreateManyTopicInputEnvelope, {
    nullable: true
  })
  createMany?: ArticleCreateManyTopicInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ArticleWhereUniqueInput], {
    nullable: true
  })
  connect?: ArticleWhereUniqueInput[] | undefined;
}

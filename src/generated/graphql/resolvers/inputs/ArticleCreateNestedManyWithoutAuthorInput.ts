import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArticleCreateManyAuthorInputEnvelope } from "../inputs/ArticleCreateManyAuthorInputEnvelope";
import { ArticleCreateOrConnectWithoutAuthorInput } from "../inputs/ArticleCreateOrConnectWithoutAuthorInput";
import { ArticleCreateWithoutAuthorInput } from "../inputs/ArticleCreateWithoutAuthorInput";
import { ArticleWhereUniqueInput } from "../inputs/ArticleWhereUniqueInput";

@TypeGraphQL.InputType("ArticleCreateNestedManyWithoutAuthorInput", {
  isAbstract: true
})
export class ArticleCreateNestedManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [ArticleCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: ArticleCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArticleCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: ArticleCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => ArticleCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: ArticleCreateManyAuthorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ArticleWhereUniqueInput], {
    nullable: true
  })
  connect?: ArticleWhereUniqueInput[] | undefined;
}

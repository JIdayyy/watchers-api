import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArticleCreateManyAuthorInput } from "../inputs/ArticleCreateManyAuthorInput";

@TypeGraphQL.InputType("ArticleCreateManyAuthorInputEnvelope", {
  isAbstract: true
})
export class ArticleCreateManyAuthorInputEnvelope {
  @TypeGraphQL.Field(_type => [ArticleCreateManyAuthorInput], {
    nullable: false
  })
  data!: ArticleCreateManyAuthorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

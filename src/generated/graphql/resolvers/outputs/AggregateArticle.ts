import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArticleCountAggregate } from "../outputs/ArticleCountAggregate";
import { ArticleMaxAggregate } from "../outputs/ArticleMaxAggregate";
import { ArticleMinAggregate } from "../outputs/ArticleMinAggregate";

@TypeGraphQL.ObjectType("AggregateArticle", {
  isAbstract: true
})
export class AggregateArticle {
  @TypeGraphQL.Field(_type => ArticleCountAggregate, {
    nullable: true
  })
  _count!: ArticleCountAggregate | null;

  @TypeGraphQL.Field(_type => ArticleMinAggregate, {
    nullable: true
  })
  _min!: ArticleMinAggregate | null;

  @TypeGraphQL.Field(_type => ArticleMaxAggregate, {
    nullable: true
  })
  _max!: ArticleMaxAggregate | null;
}

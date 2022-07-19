import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArticleCountAggregate } from "../outputs/ArticleCountAggregate";
import { ArticleMaxAggregate } from "../outputs/ArticleMaxAggregate";
import { ArticleMinAggregate } from "../outputs/ArticleMinAggregate";

@TypeGraphQL.ObjectType("ArticleGroupBy", {
  isAbstract: true
})
export class ArticleGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  author_id!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_disabled!: boolean;

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

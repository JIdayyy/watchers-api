import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCountAggregate } from "../outputs/TagCountAggregate";
import { TagMaxAggregate } from "../outputs/TagMaxAggregate";
import { TagMinAggregate } from "../outputs/TagMinAggregate";

@TypeGraphQL.ObjectType("TagGroupBy", {
  isAbstract: true
})
export class TagGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;

  @TypeGraphQL.Field(_type => TagCountAggregate, {
    nullable: true
  })
  _count!: TagCountAggregate | null;

  @TypeGraphQL.Field(_type => TagMinAggregate, {
    nullable: true
  })
  _min!: TagMinAggregate | null;

  @TypeGraphQL.Field(_type => TagMaxAggregate, {
    nullable: true
  })
  _max!: TagMaxAggregate | null;
}

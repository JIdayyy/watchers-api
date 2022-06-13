import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReplyCountAggregate } from "../outputs/ReplyCountAggregate";
import { ReplyMaxAggregate } from "../outputs/ReplyMaxAggregate";
import { ReplyMinAggregate } from "../outputs/ReplyMinAggregate";

@TypeGraphQL.ObjectType("ReplyGroupBy", {
  isAbstract: true
})
export class ReplyGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  picture!: string | null;

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
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  commentId!: string;

  @TypeGraphQL.Field(_type => ReplyCountAggregate, {
    nullable: true
  })
  _count!: ReplyCountAggregate | null;

  @TypeGraphQL.Field(_type => ReplyMinAggregate, {
    nullable: true
  })
  _min!: ReplyMinAggregate | null;

  @TypeGraphQL.Field(_type => ReplyMaxAggregate, {
    nullable: true
  })
  _max!: ReplyMaxAggregate | null;
}

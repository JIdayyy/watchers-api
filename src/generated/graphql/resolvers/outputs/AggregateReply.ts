import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReplyCountAggregate } from "../outputs/ReplyCountAggregate";
import { ReplyMaxAggregate } from "../outputs/ReplyMaxAggregate";
import { ReplyMinAggregate } from "../outputs/ReplyMinAggregate";

@TypeGraphQL.ObjectType("AggregateReply", {
  isAbstract: true
})
export class AggregateReply {
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

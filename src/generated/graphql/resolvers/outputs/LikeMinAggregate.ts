import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("LikeMinAggregate", {
  isAbstract: true
})
export class LikeMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  post_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reply_id!: string | null;
}

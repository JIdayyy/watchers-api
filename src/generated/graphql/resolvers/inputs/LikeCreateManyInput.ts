import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("LikeCreateManyInput", {
  isAbstract: true
})
export class LikeCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  post_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  user_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reply_id?: string | undefined;
}

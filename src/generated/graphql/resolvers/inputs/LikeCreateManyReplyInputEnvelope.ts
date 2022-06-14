import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeCreateManyReplyInput } from "../inputs/LikeCreateManyReplyInput";

@TypeGraphQL.InputType("LikeCreateManyReplyInputEnvelope", {
  isAbstract: true
})
export class LikeCreateManyReplyInputEnvelope {
  @TypeGraphQL.Field(_type => [LikeCreateManyReplyInput], {
    nullable: false
  })
  data!: LikeCreateManyReplyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

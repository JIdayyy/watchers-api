import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReplyCreateManyCommentInput } from "../inputs/ReplyCreateManyCommentInput";

@TypeGraphQL.InputType("ReplyCreateManyCommentInputEnvelope", {
  isAbstract: true
})
export class ReplyCreateManyCommentInputEnvelope {
  @TypeGraphQL.Field(_type => [ReplyCreateManyCommentInput], {
    nullable: false
  })
  data!: ReplyCreateManyCommentInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

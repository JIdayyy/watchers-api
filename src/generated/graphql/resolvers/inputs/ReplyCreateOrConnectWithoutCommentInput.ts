import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReplyCreateWithoutCommentInput } from "../inputs/ReplyCreateWithoutCommentInput";
import { ReplyWhereUniqueInput } from "../inputs/ReplyWhereUniqueInput";

@TypeGraphQL.InputType("ReplyCreateOrConnectWithoutCommentInput", {
  isAbstract: true
})
export class ReplyCreateOrConnectWithoutCommentInput {
  @TypeGraphQL.Field(_type => ReplyWhereUniqueInput, {
    nullable: false
  })
  where!: ReplyWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReplyCreateWithoutCommentInput, {
    nullable: false
  })
  create!: ReplyCreateWithoutCommentInput;
}

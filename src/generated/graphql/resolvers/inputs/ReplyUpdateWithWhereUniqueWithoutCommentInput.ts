import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReplyUpdateWithoutCommentInput } from "../inputs/ReplyUpdateWithoutCommentInput";
import { ReplyWhereUniqueInput } from "../inputs/ReplyWhereUniqueInput";

@TypeGraphQL.InputType("ReplyUpdateWithWhereUniqueWithoutCommentInput", {
  isAbstract: true
})
export class ReplyUpdateWithWhereUniqueWithoutCommentInput {
  @TypeGraphQL.Field(_type => ReplyWhereUniqueInput, {
    nullable: false
  })
  where!: ReplyWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReplyUpdateWithoutCommentInput, {
    nullable: false
  })
  data!: ReplyUpdateWithoutCommentInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReplyCreateWithoutLikeInput } from "../inputs/ReplyCreateWithoutLikeInput";
import { ReplyWhereUniqueInput } from "../inputs/ReplyWhereUniqueInput";

@TypeGraphQL.InputType("ReplyCreateOrConnectWithoutLikeInput", {
  isAbstract: true
})
export class ReplyCreateOrConnectWithoutLikeInput {
  @TypeGraphQL.Field(_type => ReplyWhereUniqueInput, {
    nullable: false
  })
  where!: ReplyWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReplyCreateWithoutLikeInput, {
    nullable: false
  })
  create!: ReplyCreateWithoutLikeInput;
}

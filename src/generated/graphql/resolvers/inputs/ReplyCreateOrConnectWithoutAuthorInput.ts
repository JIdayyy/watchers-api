import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReplyCreateWithoutAuthorInput } from "../inputs/ReplyCreateWithoutAuthorInput";
import { ReplyWhereUniqueInput } from "../inputs/ReplyWhereUniqueInput";

@TypeGraphQL.InputType("ReplyCreateOrConnectWithoutAuthorInput", {
  isAbstract: true
})
export class ReplyCreateOrConnectWithoutAuthorInput {
  @TypeGraphQL.Field(_type => ReplyWhereUniqueInput, {
    nullable: false
  })
  where!: ReplyWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReplyCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: ReplyCreateWithoutAuthorInput;
}

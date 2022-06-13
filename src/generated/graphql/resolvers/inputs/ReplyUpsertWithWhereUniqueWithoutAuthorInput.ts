import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReplyCreateWithoutAuthorInput } from "../inputs/ReplyCreateWithoutAuthorInput";
import { ReplyUpdateWithoutAuthorInput } from "../inputs/ReplyUpdateWithoutAuthorInput";
import { ReplyWhereUniqueInput } from "../inputs/ReplyWhereUniqueInput";

@TypeGraphQL.InputType("ReplyUpsertWithWhereUniqueWithoutAuthorInput", {
  isAbstract: true
})
export class ReplyUpsertWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => ReplyWhereUniqueInput, {
    nullable: false
  })
  where!: ReplyWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReplyUpdateWithoutAuthorInput, {
    nullable: false
  })
  update!: ReplyUpdateWithoutAuthorInput;

  @TypeGraphQL.Field(_type => ReplyCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: ReplyCreateWithoutAuthorInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReplyUpdateWithoutAuthorInput } from "../inputs/ReplyUpdateWithoutAuthorInput";
import { ReplyWhereUniqueInput } from "../inputs/ReplyWhereUniqueInput";

@TypeGraphQL.InputType("ReplyUpdateWithWhereUniqueWithoutAuthorInput", {
  isAbstract: true
})
export class ReplyUpdateWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => ReplyWhereUniqueInput, {
    nullable: false
  })
  where!: ReplyWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReplyUpdateWithoutAuthorInput, {
    nullable: false
  })
  data!: ReplyUpdateWithoutAuthorInput;
}

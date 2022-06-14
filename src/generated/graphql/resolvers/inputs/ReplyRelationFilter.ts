import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReplyWhereInput } from "../inputs/ReplyWhereInput";

@TypeGraphQL.InputType("ReplyRelationFilter", {
  isAbstract: true
})
export class ReplyRelationFilter {
  @TypeGraphQL.Field(_type => ReplyWhereInput, {
    nullable: true
  })
  is?: ReplyWhereInput | undefined;

  @TypeGraphQL.Field(_type => ReplyWhereInput, {
    nullable: true
  })
  isNot?: ReplyWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PreferenceWhereInput } from "../inputs/PreferenceWhereInput";

@TypeGraphQL.InputType("PreferenceRelationFilter", {
  isAbstract: true
})
export class PreferenceRelationFilter {
  @TypeGraphQL.Field(_type => PreferenceWhereInput, {
    nullable: true
  })
  is?: PreferenceWhereInput | undefined;

  @TypeGraphQL.Field(_type => PreferenceWhereInput, {
    nullable: true
  })
  isNot?: PreferenceWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ResetPasswordWhereUniqueInput } from "../../../inputs/ResetPasswordWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueResetPasswordArgs {
  @TypeGraphQL.Field(_type => ResetPasswordWhereUniqueInput, {
    nullable: false
  })
  where!: ResetPasswordWhereUniqueInput;
}

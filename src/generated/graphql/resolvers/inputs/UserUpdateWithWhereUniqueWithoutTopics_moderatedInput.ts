import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutTopics_moderatedInput } from "../inputs/UserUpdateWithoutTopics_moderatedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateWithWhereUniqueWithoutTopics_moderatedInput", {
  isAbstract: true
})
export class UserUpdateWithWhereUniqueWithoutTopics_moderatedInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutTopics_moderatedInput, {
    nullable: false
  })
  data!: UserUpdateWithoutTopics_moderatedInput;
}

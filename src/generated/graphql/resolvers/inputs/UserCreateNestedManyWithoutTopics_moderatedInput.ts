import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutTopics_moderatedInput } from "../inputs/UserCreateOrConnectWithoutTopics_moderatedInput";
import { UserCreateWithoutTopics_moderatedInput } from "../inputs/UserCreateWithoutTopics_moderatedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedManyWithoutTopics_moderatedInput", {
  isAbstract: true
})
export class UserCreateNestedManyWithoutTopics_moderatedInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutTopics_moderatedInput], {
    nullable: true
  })
  create?: UserCreateWithoutTopics_moderatedInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutTopics_moderatedInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTopics_moderatedInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}

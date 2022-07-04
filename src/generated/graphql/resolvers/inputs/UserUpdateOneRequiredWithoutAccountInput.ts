import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutAccountInput } from "../inputs/UserCreateOrConnectWithoutAccountInput";
import { UserCreateWithoutAccountInput } from "../inputs/UserCreateWithoutAccountInput";
import { UserUpdateWithoutAccountInput } from "../inputs/UserUpdateWithoutAccountInput";
import { UserUpsertWithoutAccountInput } from "../inputs/UserUpsertWithoutAccountInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutAccountInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutAccountInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutAccountInput, {
    nullable: true
  })
  create?: UserCreateWithoutAccountInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAccountInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutAccountInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutAccountInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutAccountInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutAccountInput, {
    nullable: true
  })
  update?: UserUpdateWithoutAccountInput | undefined;
}

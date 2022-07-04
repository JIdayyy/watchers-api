import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFollowed_usersInput } from "../inputs/UserCreateOrConnectWithoutFollowed_usersInput";
import { UserCreateWithoutFollowed_usersInput } from "../inputs/UserCreateWithoutFollowed_usersInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutFollowed_usersInput } from "../inputs/UserUpdateManyWithWhereWithoutFollowed_usersInput";
import { UserUpdateWithWhereUniqueWithoutFollowed_usersInput } from "../inputs/UserUpdateWithWhereUniqueWithoutFollowed_usersInput";
import { UserUpsertWithWhereUniqueWithoutFollowed_usersInput } from "../inputs/UserUpsertWithWhereUniqueWithoutFollowed_usersInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateManyWithoutFollowed_usersInput", {
  isAbstract: true
})
export class UserUpdateManyWithoutFollowed_usersInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutFollowed_usersInput], {
    nullable: true
  })
  create?: UserCreateWithoutFollowed_usersInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutFollowed_usersInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFollowed_usersInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutFollowed_usersInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutFollowed_usersInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  set?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  delete?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutFollowed_usersInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutFollowed_usersInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutFollowed_usersInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutFollowed_usersInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}

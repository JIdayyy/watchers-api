import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutTopics_moderatedInput } from "../inputs/UserCreateOrConnectWithoutTopics_moderatedInput";
import { UserCreateWithoutTopics_moderatedInput } from "../inputs/UserCreateWithoutTopics_moderatedInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutTopics_moderatedInput } from "../inputs/UserUpdateManyWithWhereWithoutTopics_moderatedInput";
import { UserUpdateWithWhereUniqueWithoutTopics_moderatedInput } from "../inputs/UserUpdateWithWhereUniqueWithoutTopics_moderatedInput";
import { UserUpsertWithWhereUniqueWithoutTopics_moderatedInput } from "../inputs/UserUpsertWithWhereUniqueWithoutTopics_moderatedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateManyWithoutTopics_moderatedInput", {
  isAbstract: true
})
export class UserUpdateManyWithoutTopics_moderatedInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutTopics_moderatedInput], {
    nullable: true
  })
  create?: UserCreateWithoutTopics_moderatedInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutTopics_moderatedInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTopics_moderatedInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutTopics_moderatedInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutTopics_moderatedInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutTopics_moderatedInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutTopics_moderatedInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutTopics_moderatedInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutTopics_moderatedInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}

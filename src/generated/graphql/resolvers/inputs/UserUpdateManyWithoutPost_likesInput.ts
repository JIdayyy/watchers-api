import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPost_likesInput } from "../inputs/UserCreateOrConnectWithoutPost_likesInput";
import { UserCreateWithoutPost_likesInput } from "../inputs/UserCreateWithoutPost_likesInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutPost_likesInput } from "../inputs/UserUpdateManyWithWhereWithoutPost_likesInput";
import { UserUpdateWithWhereUniqueWithoutPost_likesInput } from "../inputs/UserUpdateWithWhereUniqueWithoutPost_likesInput";
import { UserUpsertWithWhereUniqueWithoutPost_likesInput } from "../inputs/UserUpsertWithWhereUniqueWithoutPost_likesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateManyWithoutPost_likesInput", {
  isAbstract: true
})
export class UserUpdateManyWithoutPost_likesInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutPost_likesInput], {
    nullable: true
  })
  create?: UserCreateWithoutPost_likesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutPost_likesInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPost_likesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutPost_likesInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutPost_likesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutPost_likesInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutPost_likesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutPost_likesInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutPost_likesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}

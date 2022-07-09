import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutUser_likesInput } from "../inputs/PostCreateOrConnectWithoutUser_likesInput";
import { PostCreateWithoutUser_likesInput } from "../inputs/PostCreateWithoutUser_likesInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereWithoutUser_likesInput } from "../inputs/PostUpdateManyWithWhereWithoutUser_likesInput";
import { PostUpdateWithWhereUniqueWithoutUser_likesInput } from "../inputs/PostUpdateWithWhereUniqueWithoutUser_likesInput";
import { PostUpsertWithWhereUniqueWithoutUser_likesInput } from "../inputs/PostUpsertWithWhereUniqueWithoutUser_likesInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateManyWithoutUser_likesInput", {
  isAbstract: true
})
export class PostUpdateManyWithoutUser_likesInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutUser_likesInput], {
    nullable: true
  })
  create?: PostCreateWithoutUser_likesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutUser_likesInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutUser_likesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutUser_likesInput], {
    nullable: true
  })
  upsert?: PostUpsertWithWhereUniqueWithoutUser_likesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  set?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  delete?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutUser_likesInput], {
    nullable: true
  })
  update?: PostUpdateWithWhereUniqueWithoutUser_likesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutUser_likesInput], {
    nullable: true
  })
  updateMany?: PostUpdateManyWithWhereWithoutUser_likesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostScalarWhereInput[] | undefined;
}

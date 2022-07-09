import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutUser_likesInput } from "../inputs/PostCreateOrConnectWithoutUser_likesInput";
import { PostCreateWithoutUser_likesInput } from "../inputs/PostCreateWithoutUser_likesInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateNestedManyWithoutUser_likesInput", {
  isAbstract: true
})
export class PostCreateNestedManyWithoutUser_likesInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutUser_likesInput], {
    nullable: true
  })
  create?: PostCreateWithoutUser_likesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutUser_likesInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutUser_likesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;
}

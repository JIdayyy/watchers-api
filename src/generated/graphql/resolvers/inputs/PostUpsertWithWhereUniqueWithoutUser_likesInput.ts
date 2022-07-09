import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutUser_likesInput } from "../inputs/PostCreateWithoutUser_likesInput";
import { PostUpdateWithoutUser_likesInput } from "../inputs/PostUpdateWithoutUser_likesInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpsertWithWhereUniqueWithoutUser_likesInput", {
  isAbstract: true
})
export class PostUpsertWithWhereUniqueWithoutUser_likesInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUpdateWithoutUser_likesInput, {
    nullable: false
  })
  update!: PostUpdateWithoutUser_likesInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutUser_likesInput, {
    nullable: false
  })
  create!: PostCreateWithoutUser_likesInput;
}

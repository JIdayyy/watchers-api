import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutUser_likesInput } from "../inputs/PostCreateWithoutUser_likesInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateOrConnectWithoutUser_likesInput", {
  isAbstract: true
})
export class PostCreateOrConnectWithoutUser_likesInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutUser_likesInput, {
    nullable: false
  })
  create!: PostCreateWithoutUser_likesInput;
}

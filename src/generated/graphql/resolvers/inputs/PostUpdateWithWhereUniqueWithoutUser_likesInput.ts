import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostUpdateWithoutUser_likesInput } from "../inputs/PostUpdateWithoutUser_likesInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateWithWhereUniqueWithoutUser_likesInput", {
  isAbstract: true
})
export class PostUpdateWithWhereUniqueWithoutUser_likesInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUpdateWithoutUser_likesInput, {
    nullable: false
  })
  data!: PostUpdateWithoutUser_likesInput;
}

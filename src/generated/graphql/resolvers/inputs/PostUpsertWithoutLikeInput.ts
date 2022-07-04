import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutLikeInput } from "../inputs/PostCreateWithoutLikeInput";
import { PostUpdateWithoutLikeInput } from "../inputs/PostUpdateWithoutLikeInput";

@TypeGraphQL.InputType("PostUpsertWithoutLikeInput", {
  isAbstract: true
})
export class PostUpsertWithoutLikeInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutLikeInput, {
    nullable: false
  })
  update!: PostUpdateWithoutLikeInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutLikeInput, {
    nullable: false
  })
  create!: PostCreateWithoutLikeInput;
}

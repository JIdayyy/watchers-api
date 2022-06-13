import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutCommentInput } from "../inputs/PostCreateWithoutCommentInput";
import { PostUpdateWithoutCommentInput } from "../inputs/PostUpdateWithoutCommentInput";

@TypeGraphQL.InputType("PostUpsertWithoutCommentInput", {
  isAbstract: true
})
export class PostUpsertWithoutCommentInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutCommentInput, {
    nullable: false
  })
  update!: PostUpdateWithoutCommentInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutCommentInput, {
    nullable: false
  })
  create!: PostCreateWithoutCommentInput;
}

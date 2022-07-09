import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateNestedManyWithoutComment_BInput } from "../inputs/CommentCreateNestedManyWithoutComment_BInput";
import { PostCreateNestedOneWithoutCommentInput } from "../inputs/PostCreateNestedOneWithoutCommentInput";
import { UserCreateNestedOneWithoutCommentInput } from "../inputs/UserCreateNestedOneWithoutCommentInput";

@TypeGraphQL.InputType("CommentCreateWithoutComment_BInput", {
  isAbstract: true
})
export class CommentCreateWithoutComment_BInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  picture?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  parent_id?: string | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutCommentInput, {
    nullable: false
  })
  Post!: PostCreateNestedOneWithoutCommentInput;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCommentInput, {
    nullable: false
  })
  author!: UserCreateNestedOneWithoutCommentInput;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutComment_BInput, {
    nullable: true
  })
  Comment_A?: CommentCreateNestedManyWithoutComment_BInput | undefined;
}

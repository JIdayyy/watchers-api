import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateNestedManyWithoutComment_AInput } from "../inputs/CommentCreateNestedManyWithoutComment_AInput";
import { CommentCreateNestedManyWithoutComment_BInput } from "../inputs/CommentCreateNestedManyWithoutComment_BInput";
import { PostCreateNestedOneWithoutCommentInput } from "../inputs/PostCreateNestedOneWithoutCommentInput";

@TypeGraphQL.InputType("CommentCreateWithoutAuthorInput", {
  isAbstract: true
})
export class CommentCreateWithoutAuthorInput {
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

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutComment_AInput, {
    nullable: true
  })
  Comment_B?: CommentCreateNestedManyWithoutComment_AInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutComment_BInput, {
    nullable: true
  })
  Comment_A?: CommentCreateNestedManyWithoutComment_BInput | undefined;
}

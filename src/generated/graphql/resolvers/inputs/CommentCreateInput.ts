import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateNestedManyWithoutRepliesInput } from "../inputs/CommentCreateNestedManyWithoutRepliesInput";
import { CommentCreateNestedManyWithoutRepliesRelationInput } from "../inputs/CommentCreateNestedManyWithoutRepliesRelationInput";
import { PostCreateNestedOneWithoutCommentInput } from "../inputs/PostCreateNestedOneWithoutCommentInput";
import { UserCreateNestedOneWithoutCommentInput } from "../inputs/UserCreateNestedOneWithoutCommentInput";

@TypeGraphQL.InputType("CommentCreateInput", {
  isAbstract: true
})
export class CommentCreateInput {
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

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutRepliesRelationInput, {
    nullable: true
  })
  replies?: CommentCreateNestedManyWithoutRepliesRelationInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutRepliesInput, {
    nullable: true
  })
  repliesRelation?: CommentCreateNestedManyWithoutRepliesInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedOneWithoutCommentInput } from "../inputs/PostCreateNestedOneWithoutCommentInput";
import { ReplyCreateNestedManyWithoutCommentInput } from "../inputs/ReplyCreateNestedManyWithoutCommentInput";

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

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutCommentInput, {
    nullable: false
  })
  Post!: PostCreateNestedOneWithoutCommentInput;

  @TypeGraphQL.Field(_type => ReplyCreateNestedManyWithoutCommentInput, {
    nullable: true
  })
  Reply?: ReplyCreateNestedManyWithoutCommentInput | undefined;
}

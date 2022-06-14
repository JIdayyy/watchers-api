import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateNestedOneWithoutReplyInput } from "../inputs/CommentCreateNestedOneWithoutReplyInput";
import { UserCreateNestedOneWithoutReplyInput } from "../inputs/UserCreateNestedOneWithoutReplyInput";

@TypeGraphQL.InputType("ReplyCreateWithoutLikeInput", {
  isAbstract: true
})
export class ReplyCreateWithoutLikeInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  picture?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutReplyInput, {
    nullable: false
  })
  author!: UserCreateNestedOneWithoutReplyInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedOneWithoutReplyInput, {
    nullable: false
  })
  Comment!: CommentCreateNestedOneWithoutReplyInput;
}

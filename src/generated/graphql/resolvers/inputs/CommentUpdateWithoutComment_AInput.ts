import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateManyWithoutComment_AInput } from "../inputs/CommentUpdateManyWithoutComment_AInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PostUpdateOneRequiredWithoutCommentInput } from "../inputs/PostUpdateOneRequiredWithoutCommentInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCommentInput } from "../inputs/UserUpdateOneRequiredWithoutCommentInput";

@TypeGraphQL.InputType("CommentUpdateWithoutComment_AInput", {
  isAbstract: true
})
export class CommentUpdateWithoutComment_AInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  picture?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  content?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  parent_id?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutCommentInput, {
    nullable: true
  })
  Post?: PostUpdateOneRequiredWithoutCommentInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCommentInput, {
    nullable: true
  })
  author?: UserUpdateOneRequiredWithoutCommentInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateManyWithoutComment_AInput, {
    nullable: true
  })
  Comment_B?: CommentUpdateManyWithoutComment_AInput | undefined;
}

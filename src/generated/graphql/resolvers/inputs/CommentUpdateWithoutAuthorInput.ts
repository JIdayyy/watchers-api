import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PostUpdateOneRequiredWithoutCommentInput } from "../inputs/PostUpdateOneRequiredWithoutCommentInput";
import { ReplyUpdateManyWithoutCommentInput } from "../inputs/ReplyUpdateManyWithoutCommentInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CommentUpdateWithoutAuthorInput", {
  isAbstract: true
})
export class CommentUpdateWithoutAuthorInput {
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

  @TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutCommentInput, {
    nullable: true
  })
  Post?: PostUpdateOneRequiredWithoutCommentInput | undefined;

  @TypeGraphQL.Field(_type => ReplyUpdateManyWithoutCommentInput, {
    nullable: true
  })
  Reply?: ReplyUpdateManyWithoutCommentInput | undefined;
}

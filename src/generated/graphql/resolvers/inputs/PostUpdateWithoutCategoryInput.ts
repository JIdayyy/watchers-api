import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CommentUpdateManyWithoutPostInput } from "../inputs/CommentUpdateManyWithoutPostInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TagUpdateManyWithoutPostInput } from "../inputs/TagUpdateManyWithoutPostInput";
import { UserUpdateOneRequiredWithoutPostInput } from "../inputs/UserUpdateOneRequiredWithoutPostInput";

@TypeGraphQL.InputType("PostUpdateWithoutCategoryInput", {
  isAbstract: true
})
export class PostUpdateWithoutCategoryInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  slug?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  cover_picture?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  content?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isDraft?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPostInput, {
    nullable: true
  })
  author?: UserUpdateOneRequiredWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TagUpdateManyWithoutPostInput, {
    nullable: true
  })
  Tags?: TagUpdateManyWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateManyWithoutPostInput, {
    nullable: true
  })
  Comment?: CommentUpdateManyWithoutPostInput | undefined;
}

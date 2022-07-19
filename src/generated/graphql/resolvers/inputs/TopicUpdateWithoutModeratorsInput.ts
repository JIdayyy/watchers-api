import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArticleUpdateManyWithoutTopicInput } from "../inputs/ArticleUpdateManyWithoutTopicInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ForumCategoryUpdateOneRequiredWithoutTopicsInput } from "../inputs/ForumCategoryUpdateOneRequiredWithoutTopicsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("TopicUpdateWithoutModeratorsInput", {
  isAbstract: true
})
export class TopicUpdateWithoutModeratorsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ForumCategoryUpdateOneRequiredWithoutTopicsInput, {
    nullable: true
  })
  forum_category?: ForumCategoryUpdateOneRequiredWithoutTopicsInput | undefined;

  @TypeGraphQL.Field(_type => ArticleUpdateManyWithoutTopicInput, {
    nullable: true
  })
  articles?: ArticleUpdateManyWithoutTopicInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  is_disabled?: BoolFieldUpdateOperationsInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ForumCategoryUpdateOneRequiredWithoutTopicsInput } from "../inputs/ForumCategoryUpdateOneRequiredWithoutTopicsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateManyWithoutTopics_moderatedInput } from "../inputs/UserUpdateManyWithoutTopics_moderatedInput";

@TypeGraphQL.InputType("TopicUpdateWithoutArticlesInput", {
  isAbstract: true
})
export class TopicUpdateWithoutArticlesInput {
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

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  is_disabled?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutTopics_moderatedInput, {
    nullable: true
  })
  moderators?: UserUpdateManyWithoutTopics_moderatedInput | undefined;
}

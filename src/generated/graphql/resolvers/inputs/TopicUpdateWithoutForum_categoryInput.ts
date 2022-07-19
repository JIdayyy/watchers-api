import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArticleUpdateManyWithoutTopicInput } from "../inputs/ArticleUpdateManyWithoutTopicInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateManyWithoutTopics_moderatedInput } from "../inputs/UserUpdateManyWithoutTopics_moderatedInput";

@TypeGraphQL.InputType("TopicUpdateWithoutForum_categoryInput", {
  isAbstract: true
})
export class TopicUpdateWithoutForum_categoryInput {
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

  @TypeGraphQL.Field(_type => ArticleUpdateManyWithoutTopicInput, {
    nullable: true
  })
  articles?: ArticleUpdateManyWithoutTopicInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  is_disabled?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutTopics_moderatedInput, {
    nullable: true
  })
  moderators?: UserUpdateManyWithoutTopics_moderatedInput | undefined;
}

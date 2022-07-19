import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountUpdateManyWithoutUserInput } from "../inputs/AccountUpdateManyWithoutUserInput";
import { ArticleUpdateManyWithoutAuthorInput } from "../inputs/ArticleUpdateManyWithoutAuthorInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CommentUpdateManyWithoutAuthorInput } from "../inputs/CommentUpdateManyWithoutAuthorInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumRoleFieldUpdateOperationsInput } from "../inputs/EnumRoleFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PostUpdateManyWithoutAuthorInput } from "../inputs/PostUpdateManyWithoutAuthorInput";
import { PostUpdateManyWithoutUser_likesInput } from "../inputs/PostUpdateManyWithoutUser_likesInput";
import { PreferenceUpdateOneWithoutUserInput } from "../inputs/PreferenceUpdateOneWithoutUserInput";
import { SessionUpdateManyWithoutUserInput } from "../inputs/SessionUpdateManyWithoutUserInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TopicUpdateManyWithoutModeratorsInput } from "../inputs/TopicUpdateManyWithoutModeratorsInput";
import { UserUpdateManyWithoutUser_AInput } from "../inputs/UserUpdateManyWithoutUser_AInput";
import { UserUpdateManyWithoutUser_BInput } from "../inputs/UserUpdateManyWithoutUser_BInput";

@TypeGraphQL.InputType("UserUpdateWithoutResetPasswordInput", {
  isAbstract: true
})
export class UserUpdateWithoutResetPasswordInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  first_name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  last_name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  image?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  emailVerified?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  is_disabled?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  avatar?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumRoleFieldUpdateOperationsInput, {
    nullable: true
  })
  role?: EnumRoleFieldUpdateOperationsInput | undefined;

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
  nickname?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  follower_id?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AccountUpdateManyWithoutUserInput, {
    nullable: true
  })
  Account?: AccountUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateManyWithoutAuthorInput, {
    nullable: true
  })
  Comment?: CommentUpdateManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutAuthorInput, {
    nullable: true
  })
  Post?: PostUpdateManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => PreferenceUpdateOneWithoutUserInput, {
    nullable: true
  })
  Preference?: PreferenceUpdateOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => SessionUpdateManyWithoutUserInput, {
    nullable: true
  })
  Session?: SessionUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutUser_AInput, {
    nullable: true
  })
  User_B?: UserUpdateManyWithoutUser_AInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutUser_BInput, {
    nullable: true
  })
  User_A?: UserUpdateManyWithoutUser_BInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutUser_likesInput, {
    nullable: true
  })
  Post_likes?: PostUpdateManyWithoutUser_likesInput | undefined;

  @TypeGraphQL.Field(_type => ArticleUpdateManyWithoutAuthorInput, {
    nullable: true
  })
  forum_articles?: ArticleUpdateManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => TopicUpdateManyWithoutModeratorsInput, {
    nullable: true
  })
  topics_moderated?: TopicUpdateManyWithoutModeratorsInput | undefined;
}

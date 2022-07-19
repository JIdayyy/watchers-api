import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { CommentCreateNestedManyWithoutAuthorInput } from "../inputs/CommentCreateNestedManyWithoutAuthorInput";
import { PostCreateNestedManyWithoutAuthorInput } from "../inputs/PostCreateNestedManyWithoutAuthorInput";
import { PostCreateNestedManyWithoutUser_likesInput } from "../inputs/PostCreateNestedManyWithoutUser_likesInput";
import { PreferenceCreateNestedOneWithoutUserInput } from "../inputs/PreferenceCreateNestedOneWithoutUserInput";
import { ResetPasswordCreateNestedManyWithoutUserInput } from "../inputs/ResetPasswordCreateNestedManyWithoutUserInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
import { TopicCreateNestedManyWithoutModeratorsInput } from "../inputs/TopicCreateNestedManyWithoutModeratorsInput";
import { UserCreateNestedManyWithoutUser_AInput } from "../inputs/UserCreateNestedManyWithoutUser_AInput";
import { UserCreateNestedManyWithoutUser_BInput } from "../inputs/UserCreateNestedManyWithoutUser_BInput";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType("UserCreateWithoutForum_articlesInput", {
  isAbstract: true
})
export class UserCreateWithoutForum_articlesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  first_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  last_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  image!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  emailVerified?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  is_disabled?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  avatar?: string | undefined;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  role?: "SUPER_ADMIN" | "ADMIN" | "MANAGER" | "USER" | undefined;

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
  nickname?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  follower_id?: string | undefined;

  @TypeGraphQL.Field(_type => AccountCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  Account?: AccountCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  Comment?: CommentCreateNestedManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  Post?: PostCreateNestedManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => PreferenceCreateNestedOneWithoutUserInput, {
    nullable: true
  })
  Preference?: PreferenceCreateNestedOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ResetPasswordCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  ResetPassword?: ResetPasswordCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => SessionCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  Session?: SessionCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutUser_AInput, {
    nullable: true
  })
  User_B?: UserCreateNestedManyWithoutUser_AInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutUser_BInput, {
    nullable: true
  })
  User_A?: UserCreateNestedManyWithoutUser_BInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedManyWithoutUser_likesInput, {
    nullable: true
  })
  Post_likes?: PostCreateNestedManyWithoutUser_likesInput | undefined;

  @TypeGraphQL.Field(_type => TopicCreateNestedManyWithoutModeratorsInput, {
    nullable: true
  })
  topics_moderated?: TopicCreateNestedManyWithoutModeratorsInput | undefined;
}

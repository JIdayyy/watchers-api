import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { CommentCreateNestedManyWithoutAuthorInput } from "../inputs/CommentCreateNestedManyWithoutAuthorInput";
import { LikeCreateNestedManyWithoutUserInput } from "../inputs/LikeCreateNestedManyWithoutUserInput";
import { PreferenceCreateNestedOneWithoutUserInput } from "../inputs/PreferenceCreateNestedOneWithoutUserInput";
import { ResetPasswordCreateNestedManyWithoutUserInput } from "../inputs/ResetPasswordCreateNestedManyWithoutUserInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType("UserCreateWithoutPostInput", {
  isAbstract: true
})
export class UserCreateWithoutPostInput {
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

  @TypeGraphQL.Field(_type => ResetPasswordCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  ResetPassword?: ResetPasswordCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  Comment?: CommentCreateNestedManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  nickname?: string | undefined;

  @TypeGraphQL.Field(_type => LikeCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  Like?: LikeCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PreferenceCreateNestedOneWithoutUserInput, {
    nullable: true
  })
  Preference?: PreferenceCreateNestedOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => AccountCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  Account?: AccountCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => SessionCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  Session?: SessionCreateNestedManyWithoutUserInput | undefined;
}

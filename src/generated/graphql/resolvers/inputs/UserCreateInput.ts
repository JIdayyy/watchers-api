import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedManyWithoutAuthorInput } from "../inputs/PostCreateNestedManyWithoutAuthorInput";
import { ResetPasswordCreateNestedManyWithoutUserInput } from "../inputs/ResetPasswordCreateNestedManyWithoutUserInput";
import { UserCreateroleInput } from "../inputs/UserCreateroleInput";

@TypeGraphQL.InputType("UserCreateInput", {
  isAbstract: true
})
export class UserCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  first_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  last_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_disabled!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  avatar?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateroleInput, {
    nullable: true
  })
  role?: UserCreateroleInput | undefined;

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

  @TypeGraphQL.Field(_type => PostCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  Post?: PostCreateNestedManyWithoutAuthorInput | undefined;
}

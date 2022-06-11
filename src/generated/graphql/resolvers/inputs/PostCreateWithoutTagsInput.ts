import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateNestedOneWithoutPostInput } from "../inputs/CategoryCreateNestedOneWithoutPostInput";
import { UserCreateNestedOneWithoutPostInput } from "../inputs/UserCreateNestedOneWithoutPostInput";

@TypeGraphQL.InputType("PostCreateWithoutTagsInput", {
  isAbstract: true
})
export class PostCreateWithoutTagsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  slug!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cover_picture?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isDraft?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPostInput, {
    nullable: false
  })
  author!: UserCreateNestedOneWithoutPostInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateNestedOneWithoutPostInput, {
    nullable: true
  })
  Category?: CategoryCreateNestedOneWithoutPostInput | undefined;
}

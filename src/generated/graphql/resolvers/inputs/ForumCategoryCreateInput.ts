import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForumCreateNestedOneWithoutForum_categoriesInput } from "../inputs/ForumCreateNestedOneWithoutForum_categoriesInput";
import { TopicCreateNestedManyWithoutForum_categoryInput } from "../inputs/TopicCreateNestedManyWithoutForum_categoryInput";

@TypeGraphQL.InputType("ForumCategoryCreateInput", {
  isAbstract: true
})
export class ForumCategoryCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  icon?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => ForumCreateNestedOneWithoutForum_categoriesInput, {
    nullable: false
  })
  forum!: ForumCreateNestedOneWithoutForum_categoriesInput;

  @TypeGraphQL.Field(_type => TopicCreateNestedManyWithoutForum_categoryInput, {
    nullable: true
  })
  topics?: TopicCreateNestedManyWithoutForum_categoryInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  is_disabled?: boolean | undefined;
}

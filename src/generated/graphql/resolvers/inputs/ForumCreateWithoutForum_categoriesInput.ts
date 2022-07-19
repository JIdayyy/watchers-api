import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForumCreaterolesInput } from "../inputs/ForumCreaterolesInput";

@TypeGraphQL.InputType("ForumCreateWithoutForum_categoriesInput", {
  isAbstract: true
})
export class ForumCreateWithoutForum_categoriesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => ForumCreaterolesInput, {
    nullable: true
  })
  roles?: ForumCreaterolesInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  is_disabled?: boolean | undefined;
}

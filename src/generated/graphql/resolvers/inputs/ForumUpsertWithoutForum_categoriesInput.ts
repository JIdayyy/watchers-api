import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForumCreateWithoutForum_categoriesInput } from "../inputs/ForumCreateWithoutForum_categoriesInput";
import { ForumUpdateWithoutForum_categoriesInput } from "../inputs/ForumUpdateWithoutForum_categoriesInput";

@TypeGraphQL.InputType("ForumUpsertWithoutForum_categoriesInput", {
  isAbstract: true
})
export class ForumUpsertWithoutForum_categoriesInput {
  @TypeGraphQL.Field(_type => ForumUpdateWithoutForum_categoriesInput, {
    nullable: false
  })
  update!: ForumUpdateWithoutForum_categoriesInput;

  @TypeGraphQL.Field(_type => ForumCreateWithoutForum_categoriesInput, {
    nullable: false
  })
  create!: ForumCreateWithoutForum_categoriesInput;
}

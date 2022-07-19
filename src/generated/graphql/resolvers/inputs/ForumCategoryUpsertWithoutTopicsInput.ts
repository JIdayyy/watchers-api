import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForumCategoryCreateWithoutTopicsInput } from "../inputs/ForumCategoryCreateWithoutTopicsInput";
import { ForumCategoryUpdateWithoutTopicsInput } from "../inputs/ForumCategoryUpdateWithoutTopicsInput";

@TypeGraphQL.InputType("ForumCategoryUpsertWithoutTopicsInput", {
  isAbstract: true
})
export class ForumCategoryUpsertWithoutTopicsInput {
  @TypeGraphQL.Field(_type => ForumCategoryUpdateWithoutTopicsInput, {
    nullable: false
  })
  update!: ForumCategoryUpdateWithoutTopicsInput;

  @TypeGraphQL.Field(_type => ForumCategoryCreateWithoutTopicsInput, {
    nullable: false
  })
  create!: ForumCategoryCreateWithoutTopicsInput;
}

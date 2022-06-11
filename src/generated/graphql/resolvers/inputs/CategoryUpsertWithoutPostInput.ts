import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateWithoutPostInput } from "../inputs/CategoryCreateWithoutPostInput";
import { CategoryUpdateWithoutPostInput } from "../inputs/CategoryUpdateWithoutPostInput";

@TypeGraphQL.InputType("CategoryUpsertWithoutPostInput", {
  isAbstract: true
})
export class CategoryUpsertWithoutPostInput {
  @TypeGraphQL.Field(_type => CategoryUpdateWithoutPostInput, {
    nullable: false
  })
  update!: CategoryUpdateWithoutPostInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutPostInput, {
    nullable: false
  })
  create!: CategoryCreateWithoutPostInput;
}

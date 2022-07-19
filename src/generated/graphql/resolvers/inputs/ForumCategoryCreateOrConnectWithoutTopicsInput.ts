import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForumCategoryCreateWithoutTopicsInput } from "../inputs/ForumCategoryCreateWithoutTopicsInput";
import { ForumCategoryWhereUniqueInput } from "../inputs/ForumCategoryWhereUniqueInput";

@TypeGraphQL.InputType("ForumCategoryCreateOrConnectWithoutTopicsInput", {
  isAbstract: true
})
export class ForumCategoryCreateOrConnectWithoutTopicsInput {
  @TypeGraphQL.Field(_type => ForumCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: ForumCategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => ForumCategoryCreateWithoutTopicsInput, {
    nullable: false
  })
  create!: ForumCategoryCreateWithoutTopicsInput;
}

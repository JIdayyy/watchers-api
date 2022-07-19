import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForumCategoryCreateOrConnectWithoutTopicsInput } from "../inputs/ForumCategoryCreateOrConnectWithoutTopicsInput";
import { ForumCategoryCreateWithoutTopicsInput } from "../inputs/ForumCategoryCreateWithoutTopicsInput";
import { ForumCategoryWhereUniqueInput } from "../inputs/ForumCategoryWhereUniqueInput";

@TypeGraphQL.InputType("ForumCategoryCreateNestedOneWithoutTopicsInput", {
  isAbstract: true
})
export class ForumCategoryCreateNestedOneWithoutTopicsInput {
  @TypeGraphQL.Field(_type => ForumCategoryCreateWithoutTopicsInput, {
    nullable: true
  })
  create?: ForumCategoryCreateWithoutTopicsInput | undefined;

  @TypeGraphQL.Field(_type => ForumCategoryCreateOrConnectWithoutTopicsInput, {
    nullable: true
  })
  connectOrCreate?: ForumCategoryCreateOrConnectWithoutTopicsInput | undefined;

  @TypeGraphQL.Field(_type => ForumCategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: ForumCategoryWhereUniqueInput | undefined;
}

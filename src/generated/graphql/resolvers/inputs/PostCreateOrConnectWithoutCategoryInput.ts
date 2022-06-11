import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutCategoryInput } from "../inputs/PostCreateWithoutCategoryInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateOrConnectWithoutCategoryInput", {
  isAbstract: true
})
export class PostCreateOrConnectWithoutCategoryInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutCategoryInput, {
    nullable: false
  })
  create!: PostCreateWithoutCategoryInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostUpdateWithoutCategoryInput } from "../inputs/PostUpdateWithoutCategoryInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateWithWhereUniqueWithoutCategoryInput", {
  isAbstract: true
})
export class PostUpdateWithWhereUniqueWithoutCategoryInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUpdateWithoutCategoryInput, {
    nullable: false
  })
  data!: PostUpdateWithoutCategoryInput;
}

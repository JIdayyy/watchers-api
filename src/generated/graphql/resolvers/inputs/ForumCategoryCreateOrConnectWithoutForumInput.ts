import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForumCategoryCreateWithoutForumInput } from "../inputs/ForumCategoryCreateWithoutForumInput";
import { ForumCategoryWhereUniqueInput } from "../inputs/ForumCategoryWhereUniqueInput";

@TypeGraphQL.InputType("ForumCategoryCreateOrConnectWithoutForumInput", {
  isAbstract: true
})
export class ForumCategoryCreateOrConnectWithoutForumInput {
  @TypeGraphQL.Field(_type => ForumCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: ForumCategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => ForumCategoryCreateWithoutForumInput, {
    nullable: false
  })
  create!: ForumCategoryCreateWithoutForumInput;
}

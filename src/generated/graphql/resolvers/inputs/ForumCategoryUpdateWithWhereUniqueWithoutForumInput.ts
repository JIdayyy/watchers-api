import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForumCategoryUpdateWithoutForumInput } from "../inputs/ForumCategoryUpdateWithoutForumInput";
import { ForumCategoryWhereUniqueInput } from "../inputs/ForumCategoryWhereUniqueInput";

@TypeGraphQL.InputType("ForumCategoryUpdateWithWhereUniqueWithoutForumInput", {
  isAbstract: true
})
export class ForumCategoryUpdateWithWhereUniqueWithoutForumInput {
  @TypeGraphQL.Field(_type => ForumCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: ForumCategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => ForumCategoryUpdateWithoutForumInput, {
    nullable: false
  })
  data!: ForumCategoryUpdateWithoutForumInput;
}

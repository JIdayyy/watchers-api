import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ForumCategoryCreateManyInput } from "../../../inputs/ForumCategoryCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyForumCategoryArgs {
  @TypeGraphQL.Field(_type => [ForumCategoryCreateManyInput], {
    nullable: false
  })
  data!: ForumCategoryCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

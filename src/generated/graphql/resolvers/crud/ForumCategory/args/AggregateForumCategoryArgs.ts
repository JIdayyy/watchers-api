import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ForumCategoryOrderByWithRelationInput } from "../../../inputs/ForumCategoryOrderByWithRelationInput";
import { ForumCategoryWhereInput } from "../../../inputs/ForumCategoryWhereInput";
import { ForumCategoryWhereUniqueInput } from "../../../inputs/ForumCategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateForumCategoryArgs {
  @TypeGraphQL.Field(_type => ForumCategoryWhereInput, {
    nullable: true
  })
  where?: ForumCategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ForumCategoryOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ForumCategoryOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ForumCategoryWhereUniqueInput, {
    nullable: true
  })
  cursor?: ForumCategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

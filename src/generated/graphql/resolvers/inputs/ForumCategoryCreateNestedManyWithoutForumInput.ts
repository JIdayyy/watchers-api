import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForumCategoryCreateManyForumInputEnvelope } from "../inputs/ForumCategoryCreateManyForumInputEnvelope";
import { ForumCategoryCreateOrConnectWithoutForumInput } from "../inputs/ForumCategoryCreateOrConnectWithoutForumInput";
import { ForumCategoryCreateWithoutForumInput } from "../inputs/ForumCategoryCreateWithoutForumInput";
import { ForumCategoryWhereUniqueInput } from "../inputs/ForumCategoryWhereUniqueInput";

@TypeGraphQL.InputType("ForumCategoryCreateNestedManyWithoutForumInput", {
  isAbstract: true
})
export class ForumCategoryCreateNestedManyWithoutForumInput {
  @TypeGraphQL.Field(_type => [ForumCategoryCreateWithoutForumInput], {
    nullable: true
  })
  create?: ForumCategoryCreateWithoutForumInput[] | undefined;

  @TypeGraphQL.Field(_type => [ForumCategoryCreateOrConnectWithoutForumInput], {
    nullable: true
  })
  connectOrCreate?: ForumCategoryCreateOrConnectWithoutForumInput[] | undefined;

  @TypeGraphQL.Field(_type => ForumCategoryCreateManyForumInputEnvelope, {
    nullable: true
  })
  createMany?: ForumCategoryCreateManyForumInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ForumCategoryWhereUniqueInput], {
    nullable: true
  })
  connect?: ForumCategoryWhereUniqueInput[] | undefined;
}

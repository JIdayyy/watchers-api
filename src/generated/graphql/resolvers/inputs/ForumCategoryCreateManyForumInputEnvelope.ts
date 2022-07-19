import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForumCategoryCreateManyForumInput } from "../inputs/ForumCategoryCreateManyForumInput";

@TypeGraphQL.InputType("ForumCategoryCreateManyForumInputEnvelope", {
  isAbstract: true
})
export class ForumCategoryCreateManyForumInputEnvelope {
  @TypeGraphQL.Field(_type => [ForumCategoryCreateManyForumInput], {
    nullable: false
  })
  data!: ForumCategoryCreateManyForumInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

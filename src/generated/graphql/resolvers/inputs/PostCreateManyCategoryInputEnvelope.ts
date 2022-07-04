import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyCategoryInput } from "../inputs/PostCreateManyCategoryInput";

@TypeGraphQL.InputType("PostCreateManyCategoryInputEnvelope", {
  isAbstract: true
})
export class PostCreateManyCategoryInputEnvelope {
  @TypeGraphQL.Field(_type => [PostCreateManyCategoryInput], {
    nullable: false
  })
  data!: PostCreateManyCategoryInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

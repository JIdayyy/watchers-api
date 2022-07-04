import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutCommentInput } from "../inputs/PostCreateWithoutCommentInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateOrConnectWithoutCommentInput", {
  isAbstract: true
})
export class PostCreateOrConnectWithoutCommentInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutCommentInput, {
    nullable: false
  })
  create!: PostCreateWithoutCommentInput;
}

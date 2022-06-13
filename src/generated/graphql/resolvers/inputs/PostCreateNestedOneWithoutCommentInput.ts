import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutCommentInput } from "../inputs/PostCreateOrConnectWithoutCommentInput";
import { PostCreateWithoutCommentInput } from "../inputs/PostCreateWithoutCommentInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateNestedOneWithoutCommentInput", {
  isAbstract: true
})
export class PostCreateNestedOneWithoutCommentInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutCommentInput, {
    nullable: true
  })
  create?: PostCreateWithoutCommentInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutCommentInput, {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutCommentInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  connect?: PostWhereUniqueInput | undefined;
}

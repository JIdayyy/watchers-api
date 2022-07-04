import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutCommentInput } from "../inputs/PostCreateOrConnectWithoutCommentInput";
import { PostCreateWithoutCommentInput } from "../inputs/PostCreateWithoutCommentInput";
import { PostUpdateWithoutCommentInput } from "../inputs/PostUpdateWithoutCommentInput";
import { PostUpsertWithoutCommentInput } from "../inputs/PostUpsertWithoutCommentInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateOneRequiredWithoutCommentInput", {
  isAbstract: true
})
export class PostUpdateOneRequiredWithoutCommentInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutCommentInput, {
    nullable: true
  })
  create?: PostCreateWithoutCommentInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutCommentInput, {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutCommentInput | undefined;

  @TypeGraphQL.Field(_type => PostUpsertWithoutCommentInput, {
    nullable: true
  })
  upsert?: PostUpsertWithoutCommentInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  connect?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateWithoutCommentInput, {
    nullable: true
  })
  update?: PostUpdateWithoutCommentInput | undefined;
}

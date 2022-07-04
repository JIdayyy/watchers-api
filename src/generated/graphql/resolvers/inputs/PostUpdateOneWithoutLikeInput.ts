import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutLikeInput } from "../inputs/PostCreateOrConnectWithoutLikeInput";
import { PostCreateWithoutLikeInput } from "../inputs/PostCreateWithoutLikeInput";
import { PostUpdateWithoutLikeInput } from "../inputs/PostUpdateWithoutLikeInput";
import { PostUpsertWithoutLikeInput } from "../inputs/PostUpsertWithoutLikeInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateOneWithoutLikeInput", {
  isAbstract: true
})
export class PostUpdateOneWithoutLikeInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutLikeInput, {
    nullable: true
  })
  create?: PostCreateWithoutLikeInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutLikeInput, {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutLikeInput | undefined;

  @TypeGraphQL.Field(_type => PostUpsertWithoutLikeInput, {
    nullable: true
  })
  upsert?: PostUpsertWithoutLikeInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  connect?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateWithoutLikeInput, {
    nullable: true
  })
  update?: PostUpdateWithoutLikeInput | undefined;
}

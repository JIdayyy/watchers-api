import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutLikeInput } from "../inputs/PostCreateOrConnectWithoutLikeInput";
import { PostCreateWithoutLikeInput } from "../inputs/PostCreateWithoutLikeInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateNestedOneWithoutLikeInput", {
  isAbstract: true
})
export class PostCreateNestedOneWithoutLikeInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutLikeInput, {
    nullable: true
  })
  create?: PostCreateWithoutLikeInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutLikeInput, {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutLikeInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  connect?: PostWhereUniqueInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForumCategoryCreateOrConnectWithoutTopicsInput } from "../inputs/ForumCategoryCreateOrConnectWithoutTopicsInput";
import { ForumCategoryCreateWithoutTopicsInput } from "../inputs/ForumCategoryCreateWithoutTopicsInput";
import { ForumCategoryUpdateWithoutTopicsInput } from "../inputs/ForumCategoryUpdateWithoutTopicsInput";
import { ForumCategoryUpsertWithoutTopicsInput } from "../inputs/ForumCategoryUpsertWithoutTopicsInput";
import { ForumCategoryWhereUniqueInput } from "../inputs/ForumCategoryWhereUniqueInput";

@TypeGraphQL.InputType("ForumCategoryUpdateOneRequiredWithoutTopicsInput", {
  isAbstract: true
})
export class ForumCategoryUpdateOneRequiredWithoutTopicsInput {
  @TypeGraphQL.Field(_type => ForumCategoryCreateWithoutTopicsInput, {
    nullable: true
  })
  create?: ForumCategoryCreateWithoutTopicsInput | undefined;

  @TypeGraphQL.Field(_type => ForumCategoryCreateOrConnectWithoutTopicsInput, {
    nullable: true
  })
  connectOrCreate?: ForumCategoryCreateOrConnectWithoutTopicsInput | undefined;

  @TypeGraphQL.Field(_type => ForumCategoryUpsertWithoutTopicsInput, {
    nullable: true
  })
  upsert?: ForumCategoryUpsertWithoutTopicsInput | undefined;

  @TypeGraphQL.Field(_type => ForumCategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: ForumCategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ForumCategoryUpdateWithoutTopicsInput, {
    nullable: true
  })
  update?: ForumCategoryUpdateWithoutTopicsInput | undefined;
}

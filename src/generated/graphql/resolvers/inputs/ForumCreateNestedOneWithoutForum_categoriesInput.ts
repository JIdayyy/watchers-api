import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForumCreateOrConnectWithoutForum_categoriesInput } from "../inputs/ForumCreateOrConnectWithoutForum_categoriesInput";
import { ForumCreateWithoutForum_categoriesInput } from "../inputs/ForumCreateWithoutForum_categoriesInput";
import { ForumWhereUniqueInput } from "../inputs/ForumWhereUniqueInput";

@TypeGraphQL.InputType("ForumCreateNestedOneWithoutForum_categoriesInput", {
  isAbstract: true
})
export class ForumCreateNestedOneWithoutForum_categoriesInput {
  @TypeGraphQL.Field(_type => ForumCreateWithoutForum_categoriesInput, {
    nullable: true
  })
  create?: ForumCreateWithoutForum_categoriesInput | undefined;

  @TypeGraphQL.Field(_type => ForumCreateOrConnectWithoutForum_categoriesInput, {
    nullable: true
  })
  connectOrCreate?: ForumCreateOrConnectWithoutForum_categoriesInput | undefined;

  @TypeGraphQL.Field(_type => ForumWhereUniqueInput, {
    nullable: true
  })
  connect?: ForumWhereUniqueInput | undefined;
}

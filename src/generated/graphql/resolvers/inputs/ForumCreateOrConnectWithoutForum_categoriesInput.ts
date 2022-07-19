import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForumCreateWithoutForum_categoriesInput } from "../inputs/ForumCreateWithoutForum_categoriesInput";
import { ForumWhereUniqueInput } from "../inputs/ForumWhereUniqueInput";

@TypeGraphQL.InputType("ForumCreateOrConnectWithoutForum_categoriesInput", {
  isAbstract: true
})
export class ForumCreateOrConnectWithoutForum_categoriesInput {
  @TypeGraphQL.Field(_type => ForumWhereUniqueInput, {
    nullable: false
  })
  where!: ForumWhereUniqueInput;

  @TypeGraphQL.Field(_type => ForumCreateWithoutForum_categoriesInput, {
    nullable: false
  })
  create!: ForumCreateWithoutForum_categoriesInput;
}

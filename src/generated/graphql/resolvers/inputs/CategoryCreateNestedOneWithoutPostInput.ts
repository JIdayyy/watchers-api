import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateOrConnectWithoutPostInput } from "../inputs/CategoryCreateOrConnectWithoutPostInput";
import { CategoryCreateWithoutPostInput } from "../inputs/CategoryCreateWithoutPostInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateNestedOneWithoutPostInput", {
  isAbstract: true
})
export class CategoryCreateNestedOneWithoutPostInput {
  @TypeGraphQL.Field(_type => CategoryCreateWithoutPostInput, {
    nullable: true
  })
  create?: CategoryCreateWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutPostInput, {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput | undefined;
}

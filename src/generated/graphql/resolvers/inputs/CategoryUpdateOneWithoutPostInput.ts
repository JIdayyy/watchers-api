import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateOrConnectWithoutPostInput } from "../inputs/CategoryCreateOrConnectWithoutPostInput";
import { CategoryCreateWithoutPostInput } from "../inputs/CategoryCreateWithoutPostInput";
import { CategoryUpdateWithoutPostInput } from "../inputs/CategoryUpdateWithoutPostInput";
import { CategoryUpsertWithoutPostInput } from "../inputs/CategoryUpsertWithoutPostInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryUpdateOneWithoutPostInput", {
  isAbstract: true
})
export class CategoryUpdateOneWithoutPostInput {
  @TypeGraphQL.Field(_type => CategoryCreateWithoutPostInput, {
    nullable: true
  })
  create?: CategoryCreateWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutPostInput, {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpsertWithoutPostInput, {
    nullable: true
  })
  upsert?: CategoryUpsertWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateWithoutPostInput, {
    nullable: true
  })
  update?: CategoryUpdateWithoutPostInput | undefined;
}

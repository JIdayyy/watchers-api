import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagUpdateWithoutPostInput } from "../inputs/TagUpdateWithoutPostInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagUpdateWithWhereUniqueWithoutPostInput", {
  isAbstract: true
})
export class TagUpdateWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: false
  })
  where!: TagWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagUpdateWithoutPostInput, {
    nullable: false
  })
  data!: TagUpdateWithoutPostInput;
}

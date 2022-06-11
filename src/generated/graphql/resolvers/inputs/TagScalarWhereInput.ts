import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("TagScalarWhereInput", {
  isAbstract: true
})
export class TagScalarWhereInput {
  @TypeGraphQL.Field(_type => [TagScalarWhereInput], {
    nullable: true
  })
  AND?: TagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagScalarWhereInput], {
    nullable: true
  })
  OR?: TagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagScalarWhereInput], {
    nullable: true
  })
  NOT?: TagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updated_at?: DateTimeFilter | undefined;
}

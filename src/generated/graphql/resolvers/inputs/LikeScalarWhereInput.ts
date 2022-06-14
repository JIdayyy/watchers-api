import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("LikeScalarWhereInput", {
  isAbstract: true
})
export class LikeScalarWhereInput {
  @TypeGraphQL.Field(_type => [LikeScalarWhereInput], {
    nullable: true
  })
  AND?: LikeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeScalarWhereInput], {
    nullable: true
  })
  OR?: LikeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeScalarWhereInput], {
    nullable: true
  })
  NOT?: LikeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  post_id?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  user_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  reply_id?: StringNullableFilter | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeUpdateWithoutReplyInput } from "../inputs/LikeUpdateWithoutReplyInput";
import { LikeWhereUniqueInput } from "../inputs/LikeWhereUniqueInput";

@TypeGraphQL.InputType("LikeUpdateWithWhereUniqueWithoutReplyInput", {
  isAbstract: true
})
export class LikeUpdateWithWhereUniqueWithoutReplyInput {
  @TypeGraphQL.Field(_type => LikeWhereUniqueInput, {
    nullable: false
  })
  where!: LikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => LikeUpdateWithoutReplyInput, {
    nullable: false
  })
  data!: LikeUpdateWithoutReplyInput;
}

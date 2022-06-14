import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeCreateWithoutReplyInput } from "../inputs/LikeCreateWithoutReplyInput";
import { LikeUpdateWithoutReplyInput } from "../inputs/LikeUpdateWithoutReplyInput";
import { LikeWhereUniqueInput } from "../inputs/LikeWhereUniqueInput";

@TypeGraphQL.InputType("LikeUpsertWithWhereUniqueWithoutReplyInput", {
  isAbstract: true
})
export class LikeUpsertWithWhereUniqueWithoutReplyInput {
  @TypeGraphQL.Field(_type => LikeWhereUniqueInput, {
    nullable: false
  })
  where!: LikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => LikeUpdateWithoutReplyInput, {
    nullable: false
  })
  update!: LikeUpdateWithoutReplyInput;

  @TypeGraphQL.Field(_type => LikeCreateWithoutReplyInput, {
    nullable: false
  })
  create!: LikeCreateWithoutReplyInput;
}

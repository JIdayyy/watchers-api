import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeCreateWithoutReplyInput } from "../inputs/LikeCreateWithoutReplyInput";
import { LikeWhereUniqueInput } from "../inputs/LikeWhereUniqueInput";

@TypeGraphQL.InputType("LikeCreateOrConnectWithoutReplyInput", {
  isAbstract: true
})
export class LikeCreateOrConnectWithoutReplyInput {
  @TypeGraphQL.Field(_type => LikeWhereUniqueInput, {
    nullable: false
  })
  where!: LikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => LikeCreateWithoutReplyInput, {
    nullable: false
  })
  create!: LikeCreateWithoutReplyInput;
}

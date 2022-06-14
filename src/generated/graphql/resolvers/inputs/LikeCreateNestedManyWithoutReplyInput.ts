import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeCreateManyReplyInputEnvelope } from "../inputs/LikeCreateManyReplyInputEnvelope";
import { LikeCreateOrConnectWithoutReplyInput } from "../inputs/LikeCreateOrConnectWithoutReplyInput";
import { LikeCreateWithoutReplyInput } from "../inputs/LikeCreateWithoutReplyInput";
import { LikeWhereUniqueInput } from "../inputs/LikeWhereUniqueInput";

@TypeGraphQL.InputType("LikeCreateNestedManyWithoutReplyInput", {
  isAbstract: true
})
export class LikeCreateNestedManyWithoutReplyInput {
  @TypeGraphQL.Field(_type => [LikeCreateWithoutReplyInput], {
    nullable: true
  })
  create?: LikeCreateWithoutReplyInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeCreateOrConnectWithoutReplyInput], {
    nullable: true
  })
  connectOrCreate?: LikeCreateOrConnectWithoutReplyInput[] | undefined;

  @TypeGraphQL.Field(_type => LikeCreateManyReplyInputEnvelope, {
    nullable: true
  })
  createMany?: LikeCreateManyReplyInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LikeWhereUniqueInput], {
    nullable: true
  })
  connect?: LikeWhereUniqueInput[] | undefined;
}

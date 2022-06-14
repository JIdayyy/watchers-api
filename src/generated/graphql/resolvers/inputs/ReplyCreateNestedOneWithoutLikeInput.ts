import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReplyCreateOrConnectWithoutLikeInput } from "../inputs/ReplyCreateOrConnectWithoutLikeInput";
import { ReplyCreateWithoutLikeInput } from "../inputs/ReplyCreateWithoutLikeInput";
import { ReplyWhereUniqueInput } from "../inputs/ReplyWhereUniqueInput";

@TypeGraphQL.InputType("ReplyCreateNestedOneWithoutLikeInput", {
  isAbstract: true
})
export class ReplyCreateNestedOneWithoutLikeInput {
  @TypeGraphQL.Field(_type => ReplyCreateWithoutLikeInput, {
    nullable: true
  })
  create?: ReplyCreateWithoutLikeInput | undefined;

  @TypeGraphQL.Field(_type => ReplyCreateOrConnectWithoutLikeInput, {
    nullable: true
  })
  connectOrCreate?: ReplyCreateOrConnectWithoutLikeInput | undefined;

  @TypeGraphQL.Field(_type => ReplyWhereUniqueInput, {
    nullable: true
  })
  connect?: ReplyWhereUniqueInput | undefined;
}

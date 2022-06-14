import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReplyCreateOrConnectWithoutLikeInput } from "../inputs/ReplyCreateOrConnectWithoutLikeInput";
import { ReplyCreateWithoutLikeInput } from "../inputs/ReplyCreateWithoutLikeInput";
import { ReplyUpdateWithoutLikeInput } from "../inputs/ReplyUpdateWithoutLikeInput";
import { ReplyUpsertWithoutLikeInput } from "../inputs/ReplyUpsertWithoutLikeInput";
import { ReplyWhereUniqueInput } from "../inputs/ReplyWhereUniqueInput";

@TypeGraphQL.InputType("ReplyUpdateOneWithoutLikeInput", {
  isAbstract: true
})
export class ReplyUpdateOneWithoutLikeInput {
  @TypeGraphQL.Field(_type => ReplyCreateWithoutLikeInput, {
    nullable: true
  })
  create?: ReplyCreateWithoutLikeInput | undefined;

  @TypeGraphQL.Field(_type => ReplyCreateOrConnectWithoutLikeInput, {
    nullable: true
  })
  connectOrCreate?: ReplyCreateOrConnectWithoutLikeInput | undefined;

  @TypeGraphQL.Field(_type => ReplyUpsertWithoutLikeInput, {
    nullable: true
  })
  upsert?: ReplyUpsertWithoutLikeInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ReplyWhereUniqueInput, {
    nullable: true
  })
  connect?: ReplyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ReplyUpdateWithoutLikeInput, {
    nullable: true
  })
  update?: ReplyUpdateWithoutLikeInput | undefined;
}

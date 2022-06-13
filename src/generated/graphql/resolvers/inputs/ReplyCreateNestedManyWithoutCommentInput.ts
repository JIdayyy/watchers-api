import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReplyCreateManyCommentInputEnvelope } from "../inputs/ReplyCreateManyCommentInputEnvelope";
import { ReplyCreateOrConnectWithoutCommentInput } from "../inputs/ReplyCreateOrConnectWithoutCommentInput";
import { ReplyCreateWithoutCommentInput } from "../inputs/ReplyCreateWithoutCommentInput";
import { ReplyWhereUniqueInput } from "../inputs/ReplyWhereUniqueInput";

@TypeGraphQL.InputType("ReplyCreateNestedManyWithoutCommentInput", {
  isAbstract: true
})
export class ReplyCreateNestedManyWithoutCommentInput {
  @TypeGraphQL.Field(_type => [ReplyCreateWithoutCommentInput], {
    nullable: true
  })
  create?: ReplyCreateWithoutCommentInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReplyCreateOrConnectWithoutCommentInput], {
    nullable: true
  })
  connectOrCreate?: ReplyCreateOrConnectWithoutCommentInput[] | undefined;

  @TypeGraphQL.Field(_type => ReplyCreateManyCommentInputEnvelope, {
    nullable: true
  })
  createMany?: ReplyCreateManyCommentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReplyWhereUniqueInput], {
    nullable: true
  })
  connect?: ReplyWhereUniqueInput[] | undefined;
}

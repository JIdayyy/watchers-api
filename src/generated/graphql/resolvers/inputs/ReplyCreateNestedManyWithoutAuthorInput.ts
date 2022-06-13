import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReplyCreateManyAuthorInputEnvelope } from "../inputs/ReplyCreateManyAuthorInputEnvelope";
import { ReplyCreateOrConnectWithoutAuthorInput } from "../inputs/ReplyCreateOrConnectWithoutAuthorInput";
import { ReplyCreateWithoutAuthorInput } from "../inputs/ReplyCreateWithoutAuthorInput";
import { ReplyWhereUniqueInput } from "../inputs/ReplyWhereUniqueInput";

@TypeGraphQL.InputType("ReplyCreateNestedManyWithoutAuthorInput", {
  isAbstract: true
})
export class ReplyCreateNestedManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [ReplyCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: ReplyCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReplyCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: ReplyCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => ReplyCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: ReplyCreateManyAuthorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReplyWhereUniqueInput], {
    nullable: true
  })
  connect?: ReplyWhereUniqueInput[] | undefined;
}

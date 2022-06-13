import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReplyCreateManyAuthorInput } from "../inputs/ReplyCreateManyAuthorInput";

@TypeGraphQL.InputType("ReplyCreateManyAuthorInputEnvelope", {
  isAbstract: true
})
export class ReplyCreateManyAuthorInputEnvelope {
  @TypeGraphQL.Field(_type => [ReplyCreateManyAuthorInput], {
    nullable: false
  })
  data!: ReplyCreateManyAuthorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

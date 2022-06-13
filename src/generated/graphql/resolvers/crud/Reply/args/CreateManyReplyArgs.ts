import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReplyCreateManyInput } from "../../../inputs/ReplyCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyReplyArgs {
  @TypeGraphQL.Field(_type => [ReplyCreateManyInput], {
    nullable: false
  })
  data!: ReplyCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

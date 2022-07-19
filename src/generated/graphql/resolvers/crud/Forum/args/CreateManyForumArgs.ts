import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ForumCreateManyInput } from "../../../inputs/ForumCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyForumArgs {
  @TypeGraphQL.Field(_type => [ForumCreateManyInput], {
    nullable: false
  })
  data!: ForumCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PreferenceOrderByWithRelationInput } from "../../../inputs/PreferenceOrderByWithRelationInput";
import { PreferenceWhereInput } from "../../../inputs/PreferenceWhereInput";
import { PreferenceWhereUniqueInput } from "../../../inputs/PreferenceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePreferenceArgs {
  @TypeGraphQL.Field(_type => PreferenceWhereInput, {
    nullable: true
  })
  where?: PreferenceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PreferenceOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PreferenceOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PreferenceWhereUniqueInput, {
    nullable: true
  })
  cursor?: PreferenceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

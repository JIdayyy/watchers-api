import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PreferenceCreateOrConnectWithoutUserInput } from "../inputs/PreferenceCreateOrConnectWithoutUserInput";
import { PreferenceCreateWithoutUserInput } from "../inputs/PreferenceCreateWithoutUserInput";
import { PreferenceUpdateWithoutUserInput } from "../inputs/PreferenceUpdateWithoutUserInput";
import { PreferenceUpsertWithoutUserInput } from "../inputs/PreferenceUpsertWithoutUserInput";
import { PreferenceWhereUniqueInput } from "../inputs/PreferenceWhereUniqueInput";

@TypeGraphQL.InputType("PreferenceUpdateOneWithoutUserInput", {
  isAbstract: true
})
export class PreferenceUpdateOneWithoutUserInput {
  @TypeGraphQL.Field(_type => PreferenceCreateWithoutUserInput, {
    nullable: true
  })
  create?: PreferenceCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PreferenceCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: PreferenceCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PreferenceUpsertWithoutUserInput, {
    nullable: true
  })
  upsert?: PreferenceUpsertWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => PreferenceWhereUniqueInput, {
    nullable: true
  })
  connect?: PreferenceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PreferenceUpdateWithoutUserInput, {
    nullable: true
  })
  update?: PreferenceUpdateWithoutUserInput | undefined;
}

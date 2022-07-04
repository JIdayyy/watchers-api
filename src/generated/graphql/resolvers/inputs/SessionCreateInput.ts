import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutSessionInput } from "../inputs/UserCreateNestedOneWithoutSessionInput";

@TypeGraphQL.InputType("SessionCreateInput", {
  isAbstract: true
})
export class SessionCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sessionToken!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  expires!: Date;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutSessionInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutSessionInput;
}

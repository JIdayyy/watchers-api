import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType("ForumUpdaterolesInput", {
  isAbstract: true
})
export class ForumUpdaterolesInput {
  @TypeGraphQL.Field(_type => [Role], {
    nullable: true
  })
  set?: Array<"SUPER_ADMIN" | "ADMIN" | "MANAGER" | "USER"> | undefined;

  @TypeGraphQL.Field(_type => [Role], {
    nullable: true
  })
  push?: Array<"SUPER_ADMIN" | "ADMIN" | "MANAGER" | "USER"> | undefined;
}

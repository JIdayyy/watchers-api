import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType("ForumCreaterolesInput", {
  isAbstract: true
})
export class ForumCreaterolesInput {
  @TypeGraphQL.Field(_type => [Role], {
    nullable: false
  })
  set!: Array<"SUPER_ADMIN" | "ADMIN" | "MANAGER" | "USER">;
}

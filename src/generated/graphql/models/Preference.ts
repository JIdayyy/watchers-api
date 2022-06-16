import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("Preference", {
  isAbstract: true
})
export class Preference {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  showEmail!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  website?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  location?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  skills?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  job?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  education?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bio?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  color_1?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  color_2?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;

  User?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;
}

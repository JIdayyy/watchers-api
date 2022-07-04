import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Category } from "../models/Category";
import { Comment } from "../models/Comment";
import { Like } from "../models/Like";
import { Tag } from "../models/Tag";
import { User } from "../models/User";
import { PostCount } from "../resolvers/outputs/PostCount";

@TypeGraphQL.ObjectType("Post", {
  isAbstract: true
})
export class Post {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  slug!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cover_picture?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isDraft!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  categoryId?: string | null;

  Category?: Category | null;

  author?: User;

  Comment?: Comment[];

  Like?: Like[];

  Tags?: Tag[];

  @TypeGraphQL.Field(_type => PostCount, {
    nullable: true
  })
  _count?: PostCount | null;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateOrConnectWithoutReplyInput } from "../inputs/CommentCreateOrConnectWithoutReplyInput";
import { CommentCreateWithoutReplyInput } from "../inputs/CommentCreateWithoutReplyInput";
import { CommentUpdateWithoutReplyInput } from "../inputs/CommentUpdateWithoutReplyInput";
import { CommentUpsertWithoutReplyInput } from "../inputs/CommentUpsertWithoutReplyInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateOneRequiredWithoutReplyInput", {
  isAbstract: true
})
export class CommentUpdateOneRequiredWithoutReplyInput {
  @TypeGraphQL.Field(_type => CommentCreateWithoutReplyInput, {
    nullable: true
  })
  create?: CommentCreateWithoutReplyInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateOrConnectWithoutReplyInput, {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutReplyInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpsertWithoutReplyInput, {
    nullable: true
  })
  upsert?: CommentUpsertWithoutReplyInput | undefined;

  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: true
  })
  connect?: CommentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutReplyInput, {
    nullable: true
  })
  update?: CommentUpdateWithoutReplyInput | undefined;
}

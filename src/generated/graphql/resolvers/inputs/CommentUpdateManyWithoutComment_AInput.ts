import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateOrConnectWithoutComment_AInput } from "../inputs/CommentCreateOrConnectWithoutComment_AInput";
import { CommentCreateWithoutComment_AInput } from "../inputs/CommentCreateWithoutComment_AInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutComment_AInput } from "../inputs/CommentUpdateManyWithWhereWithoutComment_AInput";
import { CommentUpdateWithWhereUniqueWithoutComment_AInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutComment_AInput";
import { CommentUpsertWithWhereUniqueWithoutComment_AInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutComment_AInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateManyWithoutComment_AInput", {
  isAbstract: true
})
export class CommentUpdateManyWithoutComment_AInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutComment_AInput], {
    nullable: true
  })
  create?: CommentCreateWithoutComment_AInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutComment_AInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutComment_AInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutComment_AInput], {
    nullable: true
  })
  upsert?: CommentUpsertWithWhereUniqueWithoutComment_AInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  set?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  delete?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutComment_AInput], {
    nullable: true
  })
  update?: CommentUpdateWithWhereUniqueWithoutComment_AInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutComment_AInput], {
    nullable: true
  })
  updateMany?: CommentUpdateManyWithWhereWithoutComment_AInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentScalarWhereInput[] | undefined;
}

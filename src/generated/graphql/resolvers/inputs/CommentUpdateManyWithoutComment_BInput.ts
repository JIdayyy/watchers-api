import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateOrConnectWithoutComment_BInput } from "../inputs/CommentCreateOrConnectWithoutComment_BInput";
import { CommentCreateWithoutComment_BInput } from "../inputs/CommentCreateWithoutComment_BInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutComment_BInput } from "../inputs/CommentUpdateManyWithWhereWithoutComment_BInput";
import { CommentUpdateWithWhereUniqueWithoutComment_BInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutComment_BInput";
import { CommentUpsertWithWhereUniqueWithoutComment_BInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutComment_BInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateManyWithoutComment_BInput", {
  isAbstract: true
})
export class CommentUpdateManyWithoutComment_BInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutComment_BInput], {
    nullable: true
  })
  create?: CommentCreateWithoutComment_BInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutComment_BInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutComment_BInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutComment_BInput], {
    nullable: true
  })
  upsert?: CommentUpsertWithWhereUniqueWithoutComment_BInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutComment_BInput], {
    nullable: true
  })
  update?: CommentUpdateWithWhereUniqueWithoutComment_BInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutComment_BInput], {
    nullable: true
  })
  updateMany?: CommentUpdateManyWithWhereWithoutComment_BInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentScalarWhereInput[] | undefined;
}

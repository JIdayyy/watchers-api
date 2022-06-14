import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostUpdateOneWithoutLikeInput } from "../inputs/PostUpdateOneWithoutLikeInput";
import { ReplyUpdateOneWithoutLikeInput } from "../inputs/ReplyUpdateOneWithoutLikeInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("LikeUpdateWithoutUserInput", {
  isAbstract: true
})
export class LikeUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateOneWithoutLikeInput, {
    nullable: true
  })
  post?: PostUpdateOneWithoutLikeInput | undefined;

  @TypeGraphQL.Field(_type => ReplyUpdateOneWithoutLikeInput, {
    nullable: true
  })
  reply?: ReplyUpdateOneWithoutLikeInput | undefined;
}

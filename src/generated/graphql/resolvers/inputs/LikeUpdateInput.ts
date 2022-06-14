import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostUpdateOneWithoutLikeInput } from "../inputs/PostUpdateOneWithoutLikeInput";
import { ReplyUpdateOneWithoutLikeInput } from "../inputs/ReplyUpdateOneWithoutLikeInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutLikeInput } from "../inputs/UserUpdateOneRequiredWithoutLikeInput";

@TypeGraphQL.InputType("LikeUpdateInput", {
  isAbstract: true
})
export class LikeUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateOneWithoutLikeInput, {
    nullable: true
  })
  post?: PostUpdateOneWithoutLikeInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutLikeInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutLikeInput | undefined;

  @TypeGraphQL.Field(_type => ReplyUpdateOneWithoutLikeInput, {
    nullable: true
  })
  reply?: ReplyUpdateOneWithoutLikeInput | undefined;
}

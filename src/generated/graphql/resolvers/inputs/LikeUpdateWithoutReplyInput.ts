import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostUpdateOneWithoutLikeInput } from "../inputs/PostUpdateOneWithoutLikeInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutLikeInput } from "../inputs/UserUpdateOneRequiredWithoutLikeInput";

@TypeGraphQL.InputType("LikeUpdateWithoutReplyInput", {
  isAbstract: true
})
export class LikeUpdateWithoutReplyInput {
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
}

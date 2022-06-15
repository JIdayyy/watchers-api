import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutLikeInput } from "../inputs/UserUpdateOneRequiredWithoutLikeInput";

@TypeGraphQL.InputType("LikeUpdateWithoutPostInput", {
  isAbstract: true
})
export class LikeUpdateWithoutPostInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutLikeInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutLikeInput | undefined;
}

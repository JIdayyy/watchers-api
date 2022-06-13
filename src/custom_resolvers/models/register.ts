import { User } from 'src/generated/graphql';
import { Field, InputType } from 'type-graphql';

export type UserWithoutCountAndPassword = Omit<User, 'password'>;

@InputType()
export class RegisterInput {
  @Field()
  nickName: string;

  @Field()
  email: string;

  @Field()
  password: string;
}

/* eslint-disable no-useless-escape */
import { IsAlpha, IsEmail, Matches } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class RegisterInput {
  @Field({ nullable: false })
  @IsAlpha()
  nickName: string;

  @Field({ nullable: false })
  @IsEmail()
  email: string;

  @Field({ nullable: false })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
  password: string;
}

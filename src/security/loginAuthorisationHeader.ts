/* eslint-disable @typescript-eslint/no-unused-vars */
import { sign } from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { GQLContext } from 'src/interfaces';
import { UserWithoutCountAndPassword } from '../../src/interfaces/user';
import { LoginInput } from '../../src/custom_resolvers/Inputs/login';

const loginAuthorizationHeader = async (
  ctx: GQLContext,
  data: LoginInput
): Promise<UserWithoutCountAndPassword> => {
  const user = await ctx.prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (!user) throw new Error("User doesn't exist");

  if (!bcrypt.compareSync(data.password, user.password as string)) {
    ctx.res.setHeader('authorization', '');
    throw new Error('Invalid password');
  }

  const token = sign(
    {
      email: user.email,
      id: user.id,
      role: user.role,
      first_name: user.first_name,
      last_name: user.last_name,
    },
    process.env.JWT_SECRET as string,
    {
      expiresIn: '1d',
    }
  );

  const { password, ...userWithoutPassword } = user;

  ctx.res.setHeader('authorization', `Bearer ${token}`);
  ctx.res.setHeader('Access-Control-Allow-Credentials', 'true');

  return userWithoutPassword;
};
export default loginAuthorizationHeader;

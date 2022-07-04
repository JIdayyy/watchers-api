/* eslint-disable @typescript-eslint/no-unused-vars */
import { decode, JwtPayload, verify } from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import prismaClient from '../../../../prisma/prismaClient';
import Emailhandler from '../interfaces';

const resetPassword: Emailhandler['resetPassword'] = async (req, res) => {
  const { password: newPassword, token } = req.body;
  try {
    const user = decode(token) as JwtPayload;

    const resetPasswordSession = await prismaClient.resetPassword.findUnique({
      where: {
        token,
      },
    });

    if (!resetPasswordSession) {
      return res.status(400).send('This token is invalid');
    }

    verify(
      token,
      process.env.JWT_RESET_PASSWORD_SECRET as string,
      (err, decoded) => {
        if (err) {
          return res.status(500).send('invalid token');
        }
        return decoded;
      }
    );

    const encryptedPassword = await bcrypt.hash(newPassword, 10);

    const updatedUser = await prismaClient.user.update({
      where: {
        email: user.email,
      },
      data: {
        password: encryptedPassword,
      },
    });

    return res.status(200).send('Password reset successfully');
  } catch (error) {
    console.log(error);
  }
};

export default resetPassword;

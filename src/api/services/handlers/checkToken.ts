import Cookies from 'cookies';
import { verify } from 'jsonwebtoken';
import ServiceHandler from '../interfaces';

const checkToken: ServiceHandler['checkToken'] = (req, res) => {
  console.log('checktoken');
  const { token } = req.body;
  const cookies = new Cookies(req, res, {
    secure: process.env.NODE_ENV === 'production',
  });

  if (!token) {
    return res.status(401).json({
      message: 'No token provided',
    });
  }
  console.log('token', token);
  //   const user = verify(
  //     token,
  //     'iu78jbczihzdabfniojg674vu76cyt78gjnGc8ggvp6986hgvgfcril76R'
  //   );

  //   if (typeof user === 'string') {
  //     return res.status(401).json({
  //       message: 'User not logged in',
  //     });
  //   }

  cookies.set('token-from-api', token, {
    httpOnly: process.env.NODE_ENV === 'production',
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
  });

  return res.status(200).json({
    message: 'User logged in',
  });
};
export default checkToken;

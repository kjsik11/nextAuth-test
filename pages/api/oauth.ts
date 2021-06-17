import { NextApiRequest, NextApiResponse } from 'next';
import withErrorHandler from '@utils/withErrorHandler';
import { getProviders, getSession } from 'next-auth/client';
import { AdapterInstance } from 'next-auth/adapters';
import fetcher from '@lib/fetcher';
import { endianness } from 'node:os';

const handler: (
  req: NextApiRequest,
  res: NextApiResponse,
) => Promise<void> = async (req, res) => {
  if (req.method === 'GET') {
    // Do something whatever you want
    const { accessToken, code } = req.query;

    if (code || typeof code === 'string') {
      res.redirect(
        `http://localhost:3000/api/v1/test-resource?clientId=${process.env.CLIENTID}&clientSecret=${process.env.CLIENTSECRET}&redirectUri=${process.env.REDIRECT_URI}&code=${code}`,
      );
    }

    if (accessToken) {
      //regist cookie use accessToken

      res.redirect(`/`);
      return;
    }
    // wrong approach error
    return res.end();
  }

  res.statusCode = 404;
  throw new Error('Method not found.');
};

export default withErrorHandler(handler);

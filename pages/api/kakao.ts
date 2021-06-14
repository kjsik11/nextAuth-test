import withErrorHandler from '@utils/withErrorHandler';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
import cookie from 'cookie';

const handler: (
  req: NextApiRequest,
  res: NextApiResponse,
) => Promise<void> = async (req, res) => {
  const cook = cookie.parse(req ? req.headers.cookie || '' : '');
  res.writeHead(200, '', ['Set-Cookie', 'fake-token=5b49adaaf7687fa']);
  if (req.method === 'GET') {
    const session = await getSession({ req });

    console.log(session);

    if (!session) {
      res.statusCode = 404;
      throw new Error('Not Found Session');
    }

    return res.json({ user: session?.user });
  }

  res.statusCode = 404;
  throw new Error('Method net found');
};

export default withErrorHandler(handler);

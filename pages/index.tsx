import React from 'react';
import {
  useSession,
  signIn,
  signOut,
  getCsrfToken,
  signin,
  getSession,
} from 'next-auth/client';
import NextImage from 'next/image';
import fetcher from '@lib/fetcher';
import Git from '@components/icon/Git';
import Google from '@components/icon/Google';
import Kakao from '@components/icon/Kakao';

const Home: React.FC = () => {
  const test = React.useCallback(async () => {
    try {
      await fetcher('/api/sample');
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleGetSession = React.useCallback(async () => {
    try {
      fetcher('/api/kakao');
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  const [session, loading] = useSession();

  // set data as a state with type Data(which is declaired in global.d.ts).
  return (
    <div className="p-4 flex flex-col justify-center items-center mt-8">
      <button
        className="my-4 rounded-md  px-4 py-2 bg-indigo-700 text-white hover:opacity-80"
        onClick={() => {
          test();
        }}
      >
        fetch to server
      </button>
      <button
        className="my-4 rounded-md  px-4 py-2 bg-indigo-700 text-white hover:opacity-80"
        onClick={() => {
          handleGetSession();
        }}
      >
        getSession Test
      </button>
      {!session ? (
        <>
          <p className="text-xl font-semibold">Login Test Page</p>
          <button onClick={() => signIn()}>signin</button>
          <button
            className="mt-4 focus:outline-none rounded-md w-40 justify-around px-4 py-2 transition-all transform shadow-md bg-black text-white hover:text-black hover:bg-white flex items-center gap-2"
            onClick={() => signIn()}
          >
            <Git className="w-5 h-5" />
            <p className="flex-1">Sign In</p>
          </button>
          <button
            className="mt-4 focus:outline-none rounded-md w-40 justify-around px-4 py-2 transition-all transform shadow-md bg-black text-white hover:text-black hover:bg-white flex items-center gap-2"
            onClick={() => signIn('github')}
          >
            <Git className="w-5 h-5" />
            <p className="flex-1">Github</p>
          </button>
          <button
            className="mt-4 focus:outline-none rounded-md w-40 justify-around  px-4 py-2 transition-all transform hover:shadow-md bg-white hover:text-black flex items-center gap-2"
            onClick={() => signIn('google')}
          >
            <Google className="w-5 h-5" />
            <p className="flex-1">Google</p>
          </button>
          <button
            className="mt-4 focus:outline-none rounded-md w-40 justify-around  px-4 py-2 transition-all transform hover:shadow-md bg-yellow-300 hover:text-black flex items-center gap-2"
            onClick={() => signIn('kakao')}
          >
            <Kakao className="w-5 h-5" />
            <p className="flex-1">Kakao</p>
          </button>
        </>
      ) : (
        <div>
          <p className="text-xl font-semibold text-center">User Info</p>
          <div className="mt-12 flex items-center">
            <img
              src={session?.user?.image ?? ''}
              className="w-20 h-20 text-center"
            />
            <div className="ml-8">
              <p className="text-lg font-semibold">
                username: {session?.user?.name}
              </p>
              <p className="text-lg font-semibold">
                expire: {session?.expires?.split('T')[0]}
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="mt-4 rounded-md px-4 py-2 bg-indigo-700 text-white hover:opacity-80"
              onClick={() => signOut()}
            >
              signout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/client';
import NextImage from 'next/image';

const Home: React.FC = () => {
  const [session, loading] = useSession();
  // set data as a state with type Data(which is declaired in global.d.ts).
  return (
    <div className="p-4 flex flex-col justify-center items-center mt-8">
      {!session ? (
        <>
          <p className="text-xl font-semibold">GitHub Login Test Page</p>
          <button
            className="mt-4  rounded-md  px-4 py-2 bg-indigo-700 text-white hover:opacity-80"
            onClick={() => signIn()}
          >
            Signin With Github
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

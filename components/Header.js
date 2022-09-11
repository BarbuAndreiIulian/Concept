import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="">
      <div className="flex justify-evenly mt-4 mx-8">
        <div className="left mr-auto">Instagram</div>
        <div className="middle">Search</div>
        <div className="right ml-auto ">
          {session ? (
            <>
              Signed in as {session.user.email} <br />
              <button onClick={() => signOut()}>Sign out</button>
            </>
          ) : (
            <>
              Not signed in <br />
              <button onClick={() => signIn()}>Sign in</button>
            </>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 bg-gray-100 h-40">
        Display info here
      </div>
    </div>
  );
};

export default Header;

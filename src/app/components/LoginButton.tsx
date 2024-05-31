"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
    const { data: session } = useSession();
    if (session) {
      return (
        <>
        {session?.user?.email}&nbsp;<button onClick={() => signOut()}>Logout</button>
        </>
      );
    }
    return (
      <>
        <button
          onClick={() => {
            signIn("azure-ad");
          }}
        >Sign in</button>
      </>
    );
  };

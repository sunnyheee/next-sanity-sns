"use client";
import { ClientSafeProvider, signIn } from "next-auth/react";
import React from "react";
import ColorBtn from "./ColorBtn";

type Pros = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};

const Signin = ({ providers, callbackUrl }: Pros) => {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <ColorBtn
          key={id}
          text={`Sign in width ${name}`}
          onClick={() => signIn(id, { callbackUrl })}
          size="big"
        />
      ))}
    </>
  );
};

export default Signin;

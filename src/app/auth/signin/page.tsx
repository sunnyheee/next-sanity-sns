import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import React from "react";

const SigninPage = async () => {
  const session = await getServerSession(authOptions);
  return <div>SigninPage</div>;
};

export default SigninPage;

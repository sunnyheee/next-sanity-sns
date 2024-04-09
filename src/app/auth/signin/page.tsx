import Signin from "@/app/components/Signin";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import { authOptions } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Signin",
  description: "Signup or Login to SNS",
};

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};

const SigninPage = async ({ searchParams: { callbackUrl } }: Props) => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }

  const providers = (await getProviders()) ?? {};

  return (
    <section className="flex justify-center mt-24">
      <Signin providers={providers} callbackUrl={callbackUrl ?? "/"} />
    </section>
  );
};

export default SigninPage;

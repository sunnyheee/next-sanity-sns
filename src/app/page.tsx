import { getServerSession } from "next-auth";
import FollowingBar from "./components/FollowingBar";
import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    redirect("/auth/signin");
  }

  return (
    <section className="w-full flex flex-col md:flex-row max-w-[850px] p-4">
      <div className="w-full basis-3/4">
        <FollowingBar />
        <PostList />
      </div>
      <div className=" basis-1/4">
        <Sidebar user={user} />
      </div>
    </section>
  );
}

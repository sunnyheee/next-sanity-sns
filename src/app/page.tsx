import { getServerSession } from "next-auth";
import FollowingBar from "./components/FollowingBar";
import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  const user = session?.user;
  console.log(user, "user!!");

  if (!user) {
    redirect("/auth/signin");
  }

  return (
    <section>
      <FollowingBar />
      <PostList />
      <Sidebar user={user} />
    </section>
  );
}

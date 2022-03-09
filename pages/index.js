import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import RightSidebar from "../components/RightSidebar";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Facebook Clone</title>
      </Head>
      <Header />

      <main className="flex bg-gray-100">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed />
        {/* Right Sidebar */}
        <RightSidebar />
      </main>
    </div>
  );
}

import Head from "next/head";
import Header from "../components/Header";
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

        {/* POsts */}
        {/* Right Sidebar */}
      </main>
    </div>
  );
}

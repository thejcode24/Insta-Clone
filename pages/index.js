import Head from "next/head";
import Header from "../components/Header";
import Feed from "../components/Feed";
import scrollbarHide from "tailwind-scrollbar-hide";

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen
                   overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram Clone</title>
      </Head>

      {/* Header */}
      <Header />
      {/* Feed */}
      <Feed />
      {/* Modal */}

    </div>
  )
}

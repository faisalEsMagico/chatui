import type { NextPage } from "next";
import Head from "next/head";

import dynamic from "next/dynamic";
import Navbar from "../components/navbar/Navbar";

const ChatUiWindow = dynamic(
  () => import("../components/ChatWindow/ChatUiWindow"),
  { ssr: false }
);

const Home: NextPage = () => {



  return (
    <>
      <Head>
        <title> indian bank</title>
      </Head>

      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
        }}
      >
        <div
          id="chatUI"
          style={{
            visibility: "visible",
            position: "fixed",
            top: "0",
            bottom: "0",
            width: "100%",
          }}
        >
          <Navbar />
          <ChatUiWindow />
        </div>
      </div>

      {/* Mobile View */}
      <style jsx>{`
        @media (max-width: 767px) {
          #chatUI {
            width: 100% !important;
          }
        }
      `}</style>
    </>
  );
};
export default Home;

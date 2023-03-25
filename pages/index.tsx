import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  const [url, setUrl] = useState("");

  const generateSummary = () => {
    // implementation to generate summary
  };

  return (
    <div className="flex flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>YouTube Summarizer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20">
        <h1 className="sm:text-6xl text-4xl max-w-[708px] font-bold text-slate-900">
          Get to the point.
        </h1>
        <p className="text-slate-500 mt-5">32,118 videos summarized so far.</p>
        <div className="max-w-xl w-full">
          <div className="flex mt-10 items-center space-x-3">
            {/*     <Image
              src="/1-black.png"
              width={300}
              height={300}
              alt="1 icon"
              className="mb-5 sm:mb-0"
            /> */}
            <p className="text-left font-medium">
              Go to your YT vid then tap 'share', 'copy':{" "}
              <span className="text-slate-500"></span>
            </p>
          </div>
          <textarea
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            rows={1}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5"
            placeholder={"👉 Paste here 👈"}
            style={{ resize: "none" }}
          />

          <textarea
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            rows={5}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5"
            placeholder={"Your summary will populate here"}
          />
          <button
            className="bg-black rounded-xl text-white font-medium px-3 py-2 hover:bg-black/80 w-full"
            onClick={generateSummary}
          >
            Get to the point.
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

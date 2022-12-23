import Head from "next/head";

export default function Home() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-[#684eff] to-[#ff6dff] text-[#fffdf5] p-2">
      <Head>
        <title>RSS Runner</title>
      </Head>
      <div className="max-w-768 mx-auto py-2 pt-24">
        <h1 className="text-center text-5xl font-bold py-2">RSS Runner</h1>
        <p className="text-center text-lg text-[#3CF73C] font-semibold">
          Easily download episodes from your favorite RSS feeds
        </p>
        <form className="text-center pt-24">
          <input
            type="text"
            placeholder="Paste your RSS feed url here"
            className="w-[300px] sm:w-[600px] border-none rounded pl-1 py-3 text-black"
          />
        </form>
      </div>
    </div>
  );
}

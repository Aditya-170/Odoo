import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 py-12 bg-[#140024] text-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-snug">
          Welcome to <span className="text-[#ec4899]">ReWear</span>!
        </h1>
        <p className="mt-4 max-w-xl text-lg md:text-xl text-gray-300">
          Swap your unused clothes and contribute to a more sustainable world 🌍
        </p>
      </main>
    </>
  );
}

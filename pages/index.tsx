// pages/index.tsx

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 bg-white text-center p-6">
      {/* Orange circular button */}
      <button className="w-14 h-14 rounded-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-md text-xl font-bold">
        +
      </button>

      {/* Chocolate brown links */}
      <div className="flex flex-col items-center gap-2">
        <a href="/compare" className="text-[#d2691e] hover:text-[#a0522d] hover:underline font-medium transition-colors">
          Compare Prices →
        </a>
        <a href="/micro-producer" className="text-[#d2691e] hover:text-[#a0522d] hover:underline font-medium transition-colors">
          Become a Micro-Producer →
        </a>
      </div>
    </main>
  );
}

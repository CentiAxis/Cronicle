export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 bg-white text-center p-6">
      {/* Test red circle box */}
      <div className="w-20 h-20 bg-red-500 rounded-full"></div>

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

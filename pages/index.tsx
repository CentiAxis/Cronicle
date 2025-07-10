import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      {/* Your custom orange circular button */}
      <button className="w-12 h-12 rounded-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 shadow">
        +
      </button>
    </main>
  );
}

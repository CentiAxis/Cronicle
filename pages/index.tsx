import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black p-4">
      <header className="flex justify-between items-center py-4 border-b">
        <h1 className="text-2xl font-bold text-green-600">Chronicle</h1>
        <nav className="space-x-4">
          <Link href="/compare" className="text-blue-500">Compare</Link>
          <Link href="/cart" className="text-orange-500">Cart</Link>
          <Link href="/micro-producer" className="text-green-600">Become a Producer</Link>
          <Link href="/profile" className="text-black">Profile</Link>
        </nav>
      </header>
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded-xl shadow">Hybrid - Green Gushers</div>
          <div className="border p-4 rounded-xl shadow">Sativa - Lemon Haze</div>
        </div>
      </section>
    </main>
  );
}

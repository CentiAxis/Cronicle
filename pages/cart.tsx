export default function Cart() {
  return (
    <main className="min-h-screen bg-white text-black p-4">
      <h1 className="text-2xl font-bold text-orange-500 mb-4">Your Cart</h1>
      <p className="mb-2">Items you’ve selected for checkout will appear here.</p>
      <div className="border rounded-xl p-4 shadow">
        <p className="text-gray-600">🛒 Your cart is currently empty.</p>
      </div>
    </main>
  );
}

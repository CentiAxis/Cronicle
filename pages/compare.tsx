export default function Compare() {
  return (
    <main className="min-h-screen bg-white text-black p-4">
      <h1 className="text-2xl font-bold text-blue-500 mb-4">Compare Prices</h1>
      <p className="mb-4">
        This page will show price comparisons for cannabis products from multiple dispensaries.
      </p>
      <div className="border rounded-xl p-4 shadow">
        <p className="text-gray-600">Sample Comparison:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Green Gushers – $32 (WeedWorld)</li>
          <li>Green Gushers – $30 (BudExpress)</li>
          <li>Green Gushers – $28 (QuickHigh)</li>
        </ul>
      </div>
    </main>
  );
}

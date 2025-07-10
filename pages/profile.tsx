export default function Profile() {
  return (
    <main className="min-h-screen bg-white text-black p-4">
      <h1 className="text-2xl font-bold text-black mb-4">Your Profile</h1>
      <p className="mb-4">View your personal info, order history, and preferences.</p>

      <div className="border rounded-xl p-4 shadow space-y-2">
        <p><strong>Name:</strong> Guest User</p>
        <p><strong>Email:</strong> guest@chronicle.app</p>
        <p><strong>Membership:</strong> Free</p>
      </div>
    </main>
  );
}

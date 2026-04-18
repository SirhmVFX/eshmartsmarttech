export default function OrdersPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>
      <div className="bg-white rounded-2xl border border-black/8 p-16 text-center">
        <p className="text-5xl mb-4">📦</p>
        <h2 className="font-bold text-xl mb-2">No orders yet</h2>
        <p className="text-black/40 text-sm max-w-sm mx-auto">
          When you submit a quote request or book a consultation, your enquiries will appear here.
        </p>
      </div>
    </div>
  );
}

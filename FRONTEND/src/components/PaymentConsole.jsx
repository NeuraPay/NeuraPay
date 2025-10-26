export default function PaymentConsole() {
  return (
    <section
      id="console"
      className="py-16 bg-gray-950 text-gray-200 flex flex-col items-center border-t border-gray-800"
    >
      <h2 className="text-3xl font-bold mb-8 text-cyan-400">AI Payment Console</h2>
      <div className="bg-black border border-gray-800 rounded-2xl shadow-xl p-6 w-[90%] max-w-2xl font-mono text-sm">
        <pre className="text-left whitespace-pre-wrap text-gray-300">
{`{
  "agent_id": "agent_01",
  "resource": "data_access",
  "parameters": {
    "dataset": "market_trends_2025",
    "access_level": "full"
  },
  "response": {
    "status": 402,
    "payment_required": {
      "amount": "1.0 USDC",
      "destination": "0xNeuraAI...",
      "expires_in": "300s"
    }
  }
}`}
        </pre>
      </div>
    </section>
  );
}

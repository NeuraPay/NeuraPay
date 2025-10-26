import { useState } from "react";

export default function PaymentConsole() {
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");

  const handleSend = () => {
    alert(`Pretending to send ${amount} SOL to ${to}`);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-2xl w-full max-w-md shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Send Payment</h2>
      <input
        className="w-full p-2 mb-3 rounded bg-gray-700"
        placeholder="Receiver Address"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <input
        className="w-full p-2 mb-3 rounded bg-gray-700"
        placeholder="Amount (SOL)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        onClick={handleSend}
        className="bg-indigo-500 hover:bg-indigo-600 text-white w-full p-2 rounded"
      >
        Send
      </button>
    </div>
  );
}

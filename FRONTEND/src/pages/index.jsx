import Hero from "../components/Hero";
import PaymentConsole from "../components/PaymentConsole";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <Hero />
      <PaymentConsole />
    </main>
  );
}

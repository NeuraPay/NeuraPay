import express from "express";
const app = express();

// X402-compliant route
app.get("/", (req, res) => {
  res.json({
    x402Version: 1,
    payer: "neurapay-demo",
    accepts: [
      {
        scheme: "exact",
        network: "base",
        maxAmountRequired: "0.42",
        resource: "https://neurapay.github.io/NeuraPay/x402.json",
        description: "AI-to-AI Payment Example",
        mimeType: "application/json",
        payTo: "agent_0xA12F...",
        maxTimeoutSeconds: 60,
        asset: "SOL"
      }
    ]
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ x402 endpoint live on port ${PORT}`);
});

import { Connection, Keypair, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import dotenv from "dotenv";
dotenv.config();

const connection = new Connection(process.env.RPC_URL, "confirmed");
const sender = Keypair.fromSecretKey(
  Uint8Array.from(JSON.parse(process.env.PRIVATE_KEY))
);

const receiver = new PublicKey(process.env.RECEIVER_ADDRESS);

async function sendSol() {
  const tx = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: sender.publicKey,
      toPubkey: receiver,
      lamports: 1000000, // 0.001 SOL
    })
  );

  const signature = await connection.sendTransaction(tx, [sender]);
  console.log("✅ Transaction sent:", signature);
}

sendSol().catch(console.error);

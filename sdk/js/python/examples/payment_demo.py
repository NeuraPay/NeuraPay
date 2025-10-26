from solana.rpc.api import Client
from solana.transaction import Transaction
from solana.system_program import TransferParams, transfer
from solana.keypair import Keypair
import json, os
from dotenv import load_dotenv

load_dotenv()

client = Client(os.getenv("RPC_URL"))
sender = Keypair.from_secret_key(bytes(json.loads(os.getenv("PRIVATE_KEY"))))
receiver = os.getenv("RECEIVER_ADDRESS")

tx = Transaction().add(
    transfer(TransferParams(
        from_pubkey=sender.public_key,
        to_pubkey=receiver,
        lamports=1000000
    ))
)
resp = client.send_transaction(tx, sender)
print("✅ Sent payment:", resp)

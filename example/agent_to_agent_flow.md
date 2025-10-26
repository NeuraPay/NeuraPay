# 🤖 Agent-to-Agent Flow

**Goal:** AI Agent A pays Agent B autonomously via NeuraPay.

### Steps
1. Agent A determines task completion.
2. Agent A triggers NeuraPay SDK.
3. NeuraPay signs and sends SOL/USDC transaction.
4. Agent B confirms receipt on-chain.
5. Ledger entry is stored and both agents update state.

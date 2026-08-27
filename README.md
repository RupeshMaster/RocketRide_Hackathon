# Field Claims Copilot

An AI-powered insurance claim processing platform that validates claims, checks for fraud, and estimates repair costs using local Ollama models.

## Phase 1 Metrics (Batch Processing)
We successfully optimized our claim pipeline to process bulk records using a local LLM (Ollama).
- **Total Claims Processed:** 10
- **Total Cost:** $0.00 (Zero-cost local execution)
- **Total Wall-Clock Time:** ~5.50s

## How to run
1. Open `apps/test-ui/test.rrapp` in VS Code and click the App Builder preview. The RocketRide extension will automatically boot up the local AI engine.
2. Run `python batch_run.py` to test the backend batch processing.

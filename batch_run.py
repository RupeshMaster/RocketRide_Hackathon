import asyncio
import json
import time
from rocketride import RocketRideClient

async def run_batch():
    print("Starting Field Claims Copilot Batch Run...")
    start_time = time.time()
    
    # Initialize the RocketRide SDK Client (reads from .env)
    async with RocketRideClient(auth="local") as client:
        
        # Define our pipeline config block from the .pipe file
        # We only need the identity (project_id and version) to run it locally
        with open("pipeline/claims_processor.pipe", "r") as f:
            pipeline = json.load(f)

        # Validate pipeline connection
        await client.validate(pipeline=pipeline)

        print("Connecting to local engine to start task...")
        task = await client.use(pipeline=pipeline, ttl=900, use_existing=True)
        token = task["token"]
        
        records = 10
        print(f"Executing batch of {records} claims...\n")
        
        for i in range(1, records + 1):
            claim_data = {
                "claim_id": f"CLM-2026-99{i:03d}",
                "policy_holder": "Jane Doe",
                "description": "Tree fell on my roof during the storm.",
                "image_urls": ["https://example.com/tree_damage.jpg"],
                "repair_estimate_provided": 15000.00
            }
            
            try:
                # We use 'application/json' for Python SDK JSON sending
                response = await client.send(token, json.dumps(claim_data), mimetype='application/json')
                print(f"[OK] Claim {i} processed successfully. AI Output received.")
            except Exception as e:
                print(f"[FAIL] Claim {i} failed: {e}")
            
    wall_clock_time = time.time() - start_time
    print("\n" + "="*40)
    print("BATCH RUN SUMMARY")
    print("="*40)
    print(f"Total Records: {records}")
    print(f"Total Cost:    $0.00 (Ollama Local)")
    print(f"Wall-Clock:    {wall_clock_time:.2f} seconds")
    print("="*40)

if __name__ == "__main__":
    asyncio.run(run_batch())

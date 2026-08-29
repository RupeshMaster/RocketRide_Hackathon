const { RocketRideClient } = require('rocketride');
const fs = require('fs');

async function checkPipeline() {
    console.log("Checking engine connection...");
    
    // Auth 'local' reads ROCKETRIDE_APIKEY from .env
    const client = new RocketRideClient({ auth: 'local' });
    
    try {
        console.log("Parsing claimsProcessor.json...");
        const pipeline = JSON.parse(fs.readFileSync('./apps/demoapp-ui/src/claimsProcessor.json', 'utf-8'));
        
        console.log("Validating pipeline...");
        await client.validate({ pipeline });
        
        console.log("Calling client.use()...");
        const task = await client.use({ pipeline, ttl: 900, useExisting: true });
        
        console.log("PIPELINE INITIALIZED SUCCESSFULLY!");
        console.log("Token:", task.token);
        
        process.exit(0);
    } catch (e) {
        console.error("ERROR INITIALIZING PIPELINE:", e);
        process.exit(1);
    }
}

checkPipeline();

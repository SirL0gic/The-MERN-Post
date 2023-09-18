const axios = require('axios');

const TEST_URL = 'https://thereactpost.xyz/api/top-headlines'; // replace with the appropriate endpoint URL
const MAX_REQUESTS = 110;  // Number of requests to send. Set it to a number higher than your rate limit.

async function makeRequest() {
    try {
        const response = await axios.get(TEST_URL);
        console.log(`Response Status: ${response.status}`);
    } catch (error) {
        console.error(`Error Status: ${error.response.status}, Message: ${error.response.data}`);
    }
}

async function testRateLimit() {
    for (let i = 0; i < MAX_REQUESTS; i++) {
        await makeRequest();
        console.log(i)
    }
    console.log('Test completed');
}

testRateLimit();

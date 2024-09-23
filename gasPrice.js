const axios = require('axios');

const getGasPrice = async () => {
  try {
    // Replace 'YourApiKey' with your actual Etherscan API Key
    const response = await axios.get('https://api.etherscan.io/api', {
      params: {
        module: 'gastracker',
        action: 'gasoracle',
        apikey: 'INDGXUFIYJHXJZ8IK5XD8HWCWMR3IYX9MF'
      }
    });

    console.log(response.data);

    const { result } = response.data;

    // Check if the result exists and has gas prices
    if (result) {
      console.log(`Slow Gas Price: ${result.SafeGasPrice} Gwei`);
      console.log(`Normal Gas Price: ${result.ProposeGasPrice} Gwei`);
      console.log(`Fast Gas Price: ${result.FastGasPrice} Gwei`);
    } else {
      console.log('No result found in the API response.');
    }

  } catch (error) {
    console.error('Error fetching gas prices:', error);
  }
};

getGasPrice();

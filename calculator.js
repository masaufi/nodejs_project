const { operator,number1,number2 } = require('./config.json');

// Call Azure API
async function callAzureAPI(num1, num2, operation) {
    const apiUrl = `https://calculatorsaufi.azurewebsites.net/api/calculate?code=calculatorfunc&operation=${operation}&num1=${num1}&num2=${num2}`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error: ${errorData}`);
        }

        const data = await response.json();
        console.log("Total: ", data);
    } catch (error) {
        console.error("Error: ", error.message);
    }
}


callAzureAPI(number1, number2, operator);

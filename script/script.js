// script.js

async function fetchQuote() {
    try {
        const response = await fetch("https://zenquotes.io/api/random");
        if (!response.ok) {
            throw new Error("Failed to fetch quote");
        }
        const data = await response.json();
        return data[0].q;
    } catch (error) {
        console.error("Error fetching quote:", error);
        throw error; 
    }
}


async function displayQuote() {
    try {
        const quoteElement = document.getElementById("quote");
        const quote = await fetchQuote();
        quoteElement.textContent = quote;
    } catch (error) {
        console.error("Error displaying quote:", error);
    }
}


function startSlideshow() {
    try {
        setInterval(exchangeImages, 3000); // Change image every 3 seconds
    } catch (error) {
        console.error("Error starting slideshow:", error);
    }
}





//displayQuote();


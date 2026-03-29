// Function to perform a search in an array
function searchArray(arr, query) {
    return arr.filter(item => item.includes(query));
}

// Function to detect browser
function detectBrowser() {
    const userAgent = navigator.userAgent;
    if (userAgent.indexOf('Chrome') > -1) {
        return 'Chrome';
    } else if (userAgent.indexOf('Firefox') > -1) {
        return 'Firefox';
    } else if (userAgent.indexOf('Safari') > -1) {
        return 'Safari';
    } else {
        return 'Other';
    }
}

// Function to check HTTPS
function checkHttps() {
    return window.location.protocol === 'https:';
}

// Example usage
console.log(detectBrowser());
console.log(checkHttps());

const array = ['apple', 'banana', 'orange'];
console.log(searchArray(array, 'ap'));

function checkPalindrome(str) {
    // 1. Convert to lowercase and remove non-alphanumeric characters
    const cleanedString = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    // 2. Reverse the string
    const reversedString = cleanedString.split('').reverse().join('');
    // 3. Compare the original cleaned string with the reversed string
    return cleanedString === reversedString;
}

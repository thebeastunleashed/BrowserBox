// Import the TLD Set from the tlds.js file
import tlds from './tlds.js';

// Function to check if a string starts with a valid domain and return a modified string
export function checkAndAppendHTTPS(input) {
  const trimmedInput = input.trim();
  const firstPart = trimmedInput.split(' ')[0];
  const domainParts = firstPart.split('.').filter(part => part.length);

  // If the last part of the first word is a known TLD
  if (domainParts.length > 1 && tlds.has(domainParts[domainParts.length - 1])) {
    // Add "https://" to the start of the first word
    const restOfInput = trimmedInput.slice(firstPart.length);
    return `https://${firstPart}${restOfInput}`;
  }

  // If no valid domain is found, return the original string
  return input;
}



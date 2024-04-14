export function toProperCase(input: string): string {
    // Split the input string into words
    const words = input.split(' ');

    // Iterate through each word and capitalize the first letter
    const properCaseWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    // Join the words back together into a single string
    const properCaseString = properCaseWords.join(' ');

    return properCaseString;
}
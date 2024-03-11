/**
 * Helper function that returns an object that maps characters in the string to their frequency/count
 * @param str the input string
 * @returns object maping a character to a number
 */
function createCharCountObject(str: string): {[key: string]: number } { 

    const characterCounter : {[key: string]: number } = {}; 
    for(const char of str){ 
        if(characterCounter[char]) characterCounter[char]++
        else characterCounter[char] = 1
    }

    return characterCounter

}


/**
 * Returns an array of words from the dictionary that can be formed by rearranging some or all of the letters in the input string
 * @param inputStr the input string of lowercase English letters
 * @param dictionary an array of strings of lowercase English letters
 * @returns an array of strings 
 */
function findWords(inputStr: string, dictionary: string[]): string[]{ 
    //if we are given an empty string or dictionary, return early
    if(inputStr.length === 0 || dictionary.length === 0) return []; 
    
    //result array that includes words from the dictionary that can be formed by rearranging some or all of the letters in input string
    const matches: string[] = []; 

    //object that maps the characters in the input string to their frequency/count
    const inputCharacterCount : {[key: string]: number } = createCharCountObject(inputStr)

    const inputStrLength = inputStr.length; //storing this in a variable for a quick comparison inside isMatch function
    for(const word of dictionary){ 
        if(isMatch(word, inputStrLength, inputCharacterCount)) matches.push(word)
    }

    return matches; 

}

/**
 * Helper function that checks whether the word can be formed by rearranging some or all of the letters in the input string
 * @param word string that is being checked
 * @param lengthOfInputStr length of the input string
 * @param inputCharacterCount an object that maps a character to a number
 * @returns boolean
 */
function isMatch(word: string, lengthOfInputStr: number, inputCharacterCount: {[key: string]: number }): boolean { 
    //if the word is an empty string, or has more characters than the input string, return early
    if(word.length === 0 || word.length > lengthOfInputStr) return false; 

    //object that maps the characters in the word to their frequency/count
    const wordCharacterCount : {[key: string]: number } = createCharCountObject(word)

    //iterate over the wordFrequencyCounter and check their presence against the frequency counter of the input string
    for(const char of Object.keys(wordCharacterCount)){ 
        if(!inputCharacterCount[char] || inputCharacterCount[char] < wordCharacterCount[char]) return false;
    }

    return true;
}


//Scenarios to Test 

// empty input string 
console.log(findWords("", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
// Expected output: []

// empty dictionary 
console.log(findWords("word", []));
// Expected output: []

// problem with no matches 
console.log(findWords("tea", ["meat", "mate", "mice", "neat"]));
// Expected output: []

// problem with matches, input string with duplicate letters
console.log(findWords("oogd", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
// Expected output: ["dog", "do", "god", "goo", "go", "good"]

// input string with duplicate letters, input string with repeating character
console.log(findWords("aaaa", ["a", "aa", "aaa", "aaaa", "aaaaa", "aat"]));
//Expected output: ["a", "aa", "aaa", "aaaa"]

// problem that includes the entire input string, and substrings of it
console.log(findWords("helloworld", ["hello", "world", "hell", "he", "low", "helloworld", "", "old"]));
//Expected output: ["hello", "world", "hell", "he", "low", "helloworld", "old"]

// I would also consider testing a dictionary with duplicate words, a very large string that includes all the letters of the alphabet and 
// an invalid string like one that doesn't include only lowercase english letters.






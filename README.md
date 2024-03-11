# weekend-health-takehomechallenge

Explanation of solution:

High-level solution to this problem involves storing the character count of each character in the input string in object. For each word in the dictionary we will create a  
character count object as well and compare it against the character count object of the input string. 
Iterating over the keys, we will check if a character is present in the input string character count object or if that character is present more times than in the input string. If neither condition applies, we have a match and should return this string as part of the result. 

Other approaches I considered:

I considered another solution that didn't involve creating a character count object for each word in the dictionary. Instead, the isMatch function handled iterating over the characters in the word and checking for it's presence in the input string character count object and modifying the count to check if anything fell below 0. This required cloning the character count object for each call to isMatch since the object was being modified in the function. Cloning appeared to be less efficient than creating a new object, especially in the in the case of an empty dictionary word or a dictionary word that is greater in length than the input string, two of the checks that return false early in the isMatch function. 

I also considered an approach that involves sorting the input string and sorting the words in the dictionary, and using string.includes to check if the sorted input string includes the sorted word from the dictionary but sorting would be O(nlogn) for each word in the dictionary which is less inefficient when comparing against a character counter is just O(n) for each string.

Notes:

In solving this propblem, I assumed I didn't have to consider white space, numbers, uppercase letters or other non-alphanumeric characters since the 
problem statement expresses that the strings we are comparing against will be strictly made up of lowercase english letters.

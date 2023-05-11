//STEP 1
// let userName = prompt("Enter your first and last name");
// alert(userName.length);

//STEP 2
// let userName = prompt("Enter your first and last name");
// let nameLength = userName.length;
// let letterPosition = Number(prompt(`Enter a number between 0 and ${nameLength-1}`));
// alert(userName.charAt(letterPosition));

//STEP 3
// let firstName = prompt("Enter your first name");
// let lastName = " " + prompt("Enter your first name");
// alert(`Your name is ${firstName.concat(lastName)}`);

//STEP 4
// let testSentence = "The quick brown fox jumps over the lazy dog";
// let keyWord = "fox";
// alert(testSentence.indexOf(keyWord));

//STEP 5
// let testSentence = "The quick brown fox jumps over the lazy fox";
// let keyWord = "fox";
// alert(testSentence.lastIndexOf(keyWord));

//STEP 6
// let testSentence = "The quick brown fox jumped over the lazy dog";
// let userName = prompt("Enter your first and last name");
// alert(testSentence.replace('the lazy dog', userName));

//STEP 7
// let testSentence = "The quick brown fox jumps over the lazy dog";
// let searchWord = prompt("Enter a word - ex: jumps, over, dog, lazy, brown, etc");
// if (testSentence.search(searchWord) > 0) {
//     alert(`The word you selected was found in positon ${testSentence.search(searchWord)} of our secret sentence.`)
// } else {
//     alert('The word you entered did not match any word in our secret sentence.')
// }

//STEP 8
// let old_string = "The quick brown fox jumps over the lazy dog";
// let searchPhrase = "the lazy dog";
// let startPosition = old_string.indexOf(searchPhrase);
// let new_string = old_string.slice(startPosition, startPosition + searchPhrase.length);
// alert(new_string.toUpperCase());

//STEP 9
// let testSentence = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
// alert(testSentence.trim().toLowerCase());

//STEP 10
// let testSentence = "the quick brown fox jumps over the lazy dog";
// alert(`${testSentence.charAt(0).toUpperCase()}${testSentence.slice(1)}`);
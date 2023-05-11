//STEP 1
// let inputSting = prompt("Enter any word or string consisting of letters only");
// console.log(inputSting.split("").sort().toString().slice(","));

//STEP 2
// const inputSting = prompt("Enter a complete sentence.");
// const words = inputSting.split(" ");

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substr(1);
// }

// console.log(words.join(" "));

//STEP 3
// function vowel_count(str1)
// {
//     var vowel_list = 'aeiouAEIOU';
//     var vcount = 0;
  
//     for(var x = 0; x < str1.length ; x++)
//     {
//         if (vowel_list.indexOf(str1[x]) !== -1)
//         {
//         vcount += 1;
//         }
    
//     }
//     return vcount;
// }
// const inputSting = prompt("Enter a complete sentence.");
// console.log(vowel_count(inputSting));

//STEP 4
// const idLength = Number(prompt('What is the required length of the random ID?'));
// const randID = Math.random().toString(16).substr(2, idLength);
// console.log(randID);

//STEP 5
// function Longest_Country_Name(country_name) {
//     return country_name.reduce(function(lname, country) {
//         return lname.length > country.length ? lname : country;
//     }, "");
// }

// console.log(Longest_Country_Name(["Mexico", "Dominican Republic", "Venezuela", "Chile"]));
/* Prompt the user to enter their full name . generate a username for them based on the input 
start username with @ , folowed by their full name and ending with their fullname length
eg:  user name = "johndoe" , output = @johndoe10
*/

let fullName = prompt("Enter your full name: ");
let userName = `@${fullName}${fullName.length}`;
console.log(userName);
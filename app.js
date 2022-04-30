console.log("yusra");
////////////////////
var username = prompt("what's yout name?");
console.log(username);
//////////////////////

var usergender = prompt("What is your gender? Male/Female")
if (usergender == "Male" || usergender == "male") {
 console.log(usergender);
    alert(`welcome to my website Mr.${username}`)

}
else if (usergender == "Female" || usergender == "female") {

    alert(`welcome to my website Ms.${username}`)
}
else {
    alert(`welcome to my website `)

}


//////////////
console.log("test");
////////////////
var userage = prompt("enter your age")
if (userage <= 0) {
    alert("You are under age!")

}


var usergender = prompt("DO wants to skip the welcoming message?")

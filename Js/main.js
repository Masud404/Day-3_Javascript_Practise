// var name = "Masud";
// document.write(typeof (name));
// var number = 45;
// document.write(typeof (number));
// var bool = true;
// document.write(typeof (bool));

// let name, age, country;
// name = "Masud";
// age = 23;
// country = "Bangladesh";

// document.write(name, age, country);

// Number Method.
// var num = 34;
// var text = num.toString();
// document.write(typeof (text));

// var num1 = 34.45754;
// var num = num1.toPrecision(4);
// document.write("Number = ", num);
// var num2 = 54;
// var total = parseFloat(num1 + num2).toFixed(2);
// document.write("Total = ", total);

// var num = 55.567;
// document.write(num.toFixed(2));

// concatenate string.
// var firstName = "Md Masud";
// var lastName = "Hossain";
// document.write(firstName + " " + lastName);

// var name = "Masud";
// document.write(name.length);

// var name = window.prompt("Enter Your Name : ");
// document.write(name.charAt(3));

// var firstName = "masud ";
// var text = firstName.toUpperCase();
// document.write(text);

// var last = "HOSSAIN";
// document.write(last.toLowerCase());

// var text = window.prompt("Enter Any Text : ");
// document.write(typeof ("Type = ", parseInt(text)));

// var first = "Md Masud ";
// var last = "Hossain";
// document.write(first.concat(last));

// var name = "Bangladesh";
// document.write(name.slice(0, 3));

// var name = "Bangladehs";
// document.write(name.charAt(3));

// var num1 = parseFloat(window.prompt("First : "));
// var num2 = parseFloat(window.prompt("Second : "));
// var total = num1 + num2;
// document.write("Total = ", typeof (total));


// if, else, else if, switch.

// var number = window.prompt("Enter Your Number : ");

// if (number % 2 == 0) {
//     document.write("Even");
// }
// else {
//     document.write("Odd");
// }

// var number = window.prompt("Enter Your Number : ");

// if (number >= 80 && number <= 100) {
//     document.write("A+")
// }
// else if (number >= 70 && number <= 79) {
//     document.write("A");
// }
// else if (number >= 60 && number <= 69) {
//     document.write("A-");
// }
// else if (number >= 50 && number <= 59) {
//     document.write("B");
// }
// else if (number >= 40 && number <= 49) {
//     document.write("C");
// }
// else if (number >= 33 && number <= 39) {
//     document.write("D");
// }
// else {
//     document.write("Faill");
// }


// var grading = window.prompt("Enter Your Number : ");

// if (grading >= 80 && grading <= 100) {
//     document.write("A+");
// }
// else if (grading >= 70 && grading <= 79) {
//     document.write("A");
// }
// else if (grading >= 60 && grading <= 69) {
//     document.write("A-");
// }
// else if (grading >= 50 && grading <= 59) {
//     document.write("B");
// }
// else if (grading >= 40 && grading <= 49) {
//     document.write("C");
// }
// else if (grading >= 33 && grading <= 39) {
//     document.write("D");
// }
// else {
//     document.write("Faill");
// }


// var letter = window.prompt("Enter Your Letter : ");
// letter = letter.toLowerCase();

// if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
//     document.write("Vowel");
// }
// else {
//     document.write("Consonent");
// }


// switch.

// var letter = window.prompt("Enter Your Letter : ");

// switch (letter) {
//     case "a": {
//         document.write("Vowel");
//         break;
//     }
//     case "e": {
//         document.write("Vowel");
//         break;
//     }
//     case "i": {
//         document.write("Vowel");
//         break;
//     }
//     case "o": {
//         document.write("Vowel");
//         break;
//     }
//     case "u": {
//         document.write("Vowel");
//         break;
//     }
//     default: {
//         document.write("Consonent");
//     }
// }


// var letter = window.prompt("Enter Your Number : ");
// letter = letter.toLowerCase();

// switch (letter) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u": {
//         document.write("Vowel");
//         break;
//     }

//     default: {
//         document.write("Consonent");
//     }
// }


// for loop

// for (var x = 1; x <= 10; x++) {
//     document.write("any ")
// }

// for (var a = 1; a <= 100; a++) {
//     if (a % 2 == 0 && a % 5 == 0) {
//         document.write(" ", a)
//     }
// }


// for (var i = 1; i <= 10; i++) {
//     document.write("<h2> Masud </h2> ");
// }

// for (var a = 1; a <= 100; a++) {
//     if (a % 3 == 0) {
//         document.write(" ", a);
//     }
// }

// var sum = 0;

// for (var i = 1; i <= 15; i++) {
//     sum = sum + i;
// }
// document.write(sum);


// while loop.
// var i = 1;

// while (i < 10) {
//     i++;
//     document.write(" <h2> Masud </h2> ")
// }


// var i = 1;
// var sum = 0;

// while (i <= 5) {
//     sum = sum + i;
//     i++;
// }
// document.write("Total = ", sum);

// var i = 1;
// var sum = 0;
// while (i <= 100) {
//     if (i % 3 == 0 && i % 5 == 0) {

//         sum = sum + i;
//     }
//     i++;
// }
// document.write(sum)

// do-while.

// var i = 1;

// do {
//     i++;
//     document.write(i)
// } while (i <= 10);
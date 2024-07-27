// Create a new Date object
let today = new Date();

// Get the year, month, and day
let year = today.getFullYear();
let month = today.getMonth() + 1; // Months are zero-based in JavaScript
let day = today.getDate();

// Format the date
let formattedDate = year + "年" + month + "月" + day + "日";

// Display the formatted date using console.log
console.log(formattedDate);

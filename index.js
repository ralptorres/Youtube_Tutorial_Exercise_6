let age = 17;
let isRegistered = true;

// Using Logical Operator
if (isRegistered && age >= 18) {
  alert("Valid Voter");
}
if (!isRegistered && age >= 18) {
  alert("Register First!");
}
if (isRegistered && age < 18) {
  alert("Invalid Voter!");
} else alert("Non Voter");

// Using Nested Conditional
// if (isRegistered) {
//   if (age >= 18) {
//     alert("Valid Voter");
//   } else alert("Invalid Voter");
// } else {
//   if (age >= 18) {
//     alert("Register First!");
//   } else alert("Non Voter");
// }

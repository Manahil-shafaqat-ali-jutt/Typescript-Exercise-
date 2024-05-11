"use strict";
//lowercase
let personName = "Manahil";
console.log("personName:", personName.toLowerCase);
//uppercase
console.log("personName:", personName.toLocaleUpperCase);
//titlecase
console.log("personName:", personName.replace(/\bwg/, c => c.toUpperCase()));

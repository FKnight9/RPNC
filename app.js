const convert = require("./convert");

test = "5*4+3-2*(1+2)";

console.log(convert.convertPostfix(test));
var functions=require("./Math_Operations");

console.log(functions.Add(4,8))
console.log(functions.Add("D",16)) //return Error

console.log(functions.Sub(17,9))
console.log(functions.Sub(6,"G"))  //return Error

console.log(functions.muliply(2,6))
console.log(functions.muliply("E",9)) //return Error

console.log(functions.Divide(7,0))
console.log(functions.Divide(14,2))
console.log(functions.Divide("A",9))   //return Error


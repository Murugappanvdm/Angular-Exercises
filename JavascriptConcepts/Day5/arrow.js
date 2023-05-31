//arrow functions is an elagant way of writing anonymous
// functions
// the benefits are actually beyond sytantic ease

const add = function(a, b)
{
    return a + b
}

const hello = function(name)
{
    console.log("hello:", name)
}
sum = (a,b) => a+b
greet = (name) => {console.log("hello-:" , name)}
sumv2 = (a,b) => {
    console.log("logic")
    return a+b
}

console.log(add(1,2))
console.log(sum(11,21))
console.log(sumv2(11,21))
hello("abc")
greet("one11")
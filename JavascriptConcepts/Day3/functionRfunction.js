function sample()
{
    return function(a,b)
    {
        return a + b;
    }
}
console.log(sample())
console.log(sample()(3,4))

function add(a,b){return a+b}
function mul(a,b){return a*b}
function test(option)
{
    if(option==1)
    return add
    else
    return mul
}
console.log(test(2)(3,4))
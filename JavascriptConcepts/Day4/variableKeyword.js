a=20 // global scope variable
function printval()
{
    a=35
    console.log('inside',a)
    a=50
}
printval()
console.log('outside',a)
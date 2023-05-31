a=20
function printval()
{
    var a=35 //function scope variable
    console.log('inside',a)
    a=50
}
printval()
console.log('outside',a)
function outer()
{
   var a=30
    function inner()
    {
        console.log("outer a value in inner",a)
        a++

    }
    return inner
}

fun =outer()
fun2 = outer()
fun()
fun()
fun()
fun2()
fun()
fun2()
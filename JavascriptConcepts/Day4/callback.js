function testfn(fun)
{
    console.log("first 20%")
    fun("data1")
    console.log("another 20%")
    fun("data2")
    console.log("done")
}
testfn(
    function(data)
    {
        console.log("caller logic")
        console.log(data, " is processed by the caller")

    }
)

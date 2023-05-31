function demoVariable()
{
     let a=30
    console.log("Within the outer range a is ", a)
    {
        let a=90 //local scope
        console.log("Within the block range a is ", a)
    }
    console.log("Again within the outer range a is ", a)
}
demoVariable()
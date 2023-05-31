function Sample()
{
    //console.log(this)
    console.log(this.Sample.store)
}
a = 30
Sample.store={rno:1,rnam:"aa"}
Sample()
function libfun(fun){
    var dataitems = ["one","two","three","four"]
    fun(dataitems[Math.round(Math.random()*2)])
}

class DataHolder
{
    constructor (data){
        this.data = data
    }
    show()
    {
        console.log("Data-->", this.data)
    }
    changeData()
    {
        /*
        libfun(function(value)
        {
            this.data = value
                }.bind(this))
                */
      libfun((value)=>{this.data=value + '-1'})          
    }
}
Obj = new DataHolder("hello")
Obj.show()
Obj.changeData()
Obj.show()
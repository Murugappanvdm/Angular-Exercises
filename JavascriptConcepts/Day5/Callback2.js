function sendMeWhatIWant(arr, fun)
{
    let items=["Nothing","A","so","one","four","trust","simple","poverty","activity"]
    for(let x in arr){
        if(arr[x]>=0 && arr[x]<=8)
        fun(items[arr[x]])
        else
        fun("Invalid")
    }

}
sendMeWhatIWant([3,5,7,10], function(data){
    console.log("Got...",data)
})
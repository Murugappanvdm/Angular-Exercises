/*
//case 1: not asynchronous
setTimeout(function(){
    console.log("printing...")
},8000)

//case 2: not asynchronous
function delayedProcess(){
    console.log("function started")
    setTimeout(() => {
      return "hello"  
    }, 0);
}
result = delayedProcess()
console.log(result)

*/
//case 3: asynchronous
function delayedProcess(input) {
    console.log("function started")
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (input == "bad")
                reject("failed")
            else
                resolve("sucess")
        }, 3000)
    })


}
result = delayedProcess("")
console.log(result)
result.then(
    function (data) { console.log(data) },
    function (error) { console.log(error) }
)
console.log("other running code")
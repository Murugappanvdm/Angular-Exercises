function giveMeWhatIask(input) {
    var fruits = ["Apple", "Banana", "Papaya", "Gauva", "Orange"]
    var vegetables = ["carrot", "potato", "onion", "chilli", "beans"]
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (input == "fruits")
                resolve(fruits[Math.round(Math.random() * 5)])
            else if (input == "vegetables")
                resolve(vegetables[Math.round(Math.random() * 5)])
            else
                reject("Only fruits & vegetables")
        }, 2000)
    })
}

/*
result = giveMeWhatIask("vegetables")
console.log(result)
result.then(
    function (data) { console.log(data) },
    function (error) { console.log(error) }
)
*/
function callerLogic() {
    result = giveMeWhatIask("vegetables")
    result.then(
        (data) => {
            console.log(data)
            console.log("caller code - success")
        },
        (error) => {
            console.log(error)
            console.log("caller code - failed")
        })
    console.log("caller code")
}
callerLogic()
console.log("other running code")
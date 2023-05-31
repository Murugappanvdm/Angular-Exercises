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

async function callerLogic() {
    try {
        result = await giveMeWhatIask("fr1uits")
        console.log("received: ", result)
    }
    catch (e) {
        console.log("error: ", e)
    }
    console.log("inside caller code")
}
callerLogic()
console.log("other running code")
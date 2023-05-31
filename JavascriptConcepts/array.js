a=[12,53,89,890,34]
console.log(a[5])  // undefined

console.log(a[234]) // undefined

a[2]=90 //legal, works
a[945]=890  //legal

console.log(a)
console.log(a[87])

a[-23] = 3489
a['place'] ="chennai"
b={sno:1,name:"Lokesh"}
a[b] = " Javascript Object"

console.log(a.length , " is the size of array")
console.log(a[b])
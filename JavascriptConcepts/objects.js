person={
    sno:1,
    name:"one",
    age:25
}
person.skills=["a1","b2","c3"]
for(let x in person)
    console.log(x,person[x])
console.log(person)
console.log(Object.keys(person))

console.log(Object.values(person))
console.log('----')
list =[23,2,6,7,33]
list["sno"]=34
list["name"]="raj"
for(let x in list)
    console.log(x,list[x])
console.log(Object.keys(list))

console.log(Object.values(list))

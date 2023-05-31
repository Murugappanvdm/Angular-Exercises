a=[3,6,4]
console.log(a)
b=a
b[4]=900
console.log(a)
console.log(b)

c=[]
for(let x in a)
c[x]=a[x]
console.log(c)
c[8]=70
console.log(a)
console.log(c)
a=[56,646,2,9989,453]
a[9]=44
a[-10]=22
console.log(a)
for(let x=0;x<a.length;x++)
{
    console.log(a[x])
}

console.log('--')
a[-3]="abc"
b={sno:1,name:'raju'}
a[JSON.stringify(b)]="one"
for(let x in a)
{
    console.log(typeof(x))

    console.log(x,a[x])
}

for(let x of a)
console.log(x)
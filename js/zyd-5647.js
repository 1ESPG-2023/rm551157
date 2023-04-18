const liElement = document.getElementsByTagName("li")
/*
for (let index = 0; index < liElement.length; index++) {
    console.log (liElement[index].textContent)
}
*/

let nr1 = [1,2,3,4,5]
let nr2 = [6,7,8,9,10]
let nr3 =  [nr1,nr2]

console.log(`arrays ai nr1 ${nr1}`)
console.log(`arrays ai nr2 ${nr2}`)
nr3.forEach((itenDoArray => {
    console.log(`Array-3 sendo listando ${itenDoArray}`);
}))


nr3.map((numero,key)=>{
    console.log(`Itens do array - ${numero}`);
    numero.forEach((digitos)=>{
        console.log(digitos)
    })
})

const liElementHtml = document.getElementsByClassName("li")
const liElementArray = [...liElementHtml]
liElementArray.map((item,key)=>{
    console.log(`${key+1} -I ${item.textContent}`)
})



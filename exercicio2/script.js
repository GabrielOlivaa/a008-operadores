const a = Number(prompt("digite um numero:"))
const b =Number (prompt ("digite outro numero:"))
console.log("numero 1:",a, "numero 2:", b)
const Div1= a%b
console.log("resto da divisão",Div1)
const Div2= b%a
console.log("resto da divisão",Div2)

console.log("O primeiro numero é maior que o segundo:", a> b)
console.log("O primeiro numero é igual ao segundo:", a=== b)
console.log("o primeiro numero é divisivel pelo segundo numero",Div1 === 0  )
console.log("o segundo numero é divisivel pelo primeiro numero",Div2 === 0  )
var x = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
var media = 0
var soma = 0
var cont = 0

for(let i = 0; i <= x.length; i++){
    if(x[i] % 2 == 0){
     cont ++
     soma += x[i]
    }
}
media = soma / cont
console.log(media)
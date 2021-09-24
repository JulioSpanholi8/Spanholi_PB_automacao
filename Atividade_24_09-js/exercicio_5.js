var x = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
var media = 0
var a = 0
var b = 0

for(var count = 1; count <= x.length; count++){
    if(count % 2 ==0){
     a += 1
     b += count
    }
}
console.log(media = a/b)
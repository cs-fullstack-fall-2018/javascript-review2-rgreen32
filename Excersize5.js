var arr = [1,2,3,4,5];
var can = true;
var num = parseInt(prompt("HOW MANY YOU WANT TO PRINT??"));
if (num > arr.length){
    can = false;
}

while(can === true){
    for(var i=0; i<num; i++){
        console.log(arr[i])
    }
}
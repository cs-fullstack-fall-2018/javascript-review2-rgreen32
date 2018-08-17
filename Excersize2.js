function main(){
    var input = parseInt(prompt("GIMME A NUMBER"));

    if (input > 0){
        alert("POSITIVE")
    }else if(input < 0){
        alert("NEGATIVE")
    }else if(input === 0 ){
        alert("ZERO")
    }else{
        alert("ERROR")
    }
}

main();
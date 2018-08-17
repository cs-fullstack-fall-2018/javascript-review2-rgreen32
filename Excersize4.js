function main() {
    var fav = prompt("GIMME THAT FAVORITE NUMBER")

    function aboveOrBelow100{
        if(fav > 100){
            alert("Greater than 100")
        }else if(fav < 100){
            alert("Less than 100")
        }else{
            alert("IT IS EQUAL")
        }
    }

    aboveOrBelow100()

}

main()
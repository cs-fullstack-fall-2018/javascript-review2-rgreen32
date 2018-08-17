class Book{

    constructor(Name, rating, yearReleased){
        this.BookName = Name;
        this.rating = rating;
        this.yearReleased = yearReleased;
    }

    printAll(){
        alert(this.BookName);
        alert(this.rating);
        alert(this.yearReleased);

    }




}
function main(){
    let one = new Book("KONG", "8.3", "2003");
    one.printAll()

}

main();
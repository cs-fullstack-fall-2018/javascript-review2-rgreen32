class Dog {
    constructor(Name,Breed,Color, Gender){
        this.Name = Name;
        this.Breed = Breed;
        this.Color = Color;
        this.Gender = Gender
    }


}
function main(){
    var newDog = new Dog("Fiddo", "Lab", "brown", "male");
    alert(newDog.name);
    alert(newDog.breed);
    alert(newDog.color);
    alert(newDog.gender);
}

main();
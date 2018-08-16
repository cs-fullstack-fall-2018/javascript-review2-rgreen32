# Javascript_Review2

All code should follow the standard template
```javascript
function main() {
}

main();
```

### Exercise 1
Given a main function:
```
var studentName = "Kenn";
printName(studentName); 
```
Create a printName function to alert "Hello" + studentName

### Exercise 2
Ask the user for a number. If it’s positive, alert “POSITIVE”. If it’s negative, alert “NEGATIVE”. If it’s zero, alert ZERO. If it's anything else, alert "ERROR".

### Exercise 3
Print -10 through 5 using any loop into the console.

### Exercise 4
In your main function, ask the user to input their favorite number. Alert the user of their favorite number. Create a function called ```aboveOrBelow100``` that alerts the user if their favorite number is above 100, below 100, or if it's equal alert It's 100!!!

### Exercise 5
Create an array with 5 numbers. Ask the user how many elements from the array to print to the console. Print each element to the console up to the user's input. DO NOT print the array. Print each element. Alert "ERROR" if the user's input is larger than the size of the array.

### Exercise 6
Create a Book class with the following attributes: bookName, rating, and yearReleased. Create a method printAllAttributes that will alert the user of the value of each attribute.

In your main function create two Book objects, assign a value to each attribute, and print them to the console.

Remember, this is the basic model of a javascript file with a class
```javascript
class Book{
  CLASS HERE
}

function main(){

}

main();
```

### Exercise 7
Create a class Dog. Make sure it has the attributes name, breed, color, gender. There are no methods in this class. The main function below should work with the class you create. Don't change anything in the main function.
```javascript
class Dog{
  CLASS HERE
}

function main(){
	var newDog = new Dog("Fiddo", "Lab", "brown", "male");
	alert(newDog.name); 
	alert(newDog.breed);
	alert(newDog.color);
	alert(newDog.gender);
}

main();
```

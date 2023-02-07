// object programming

function Dog(name, age, breed, color){
    this.name = name
    this.age = age
    this.breed = breed
    this.color = color

    this.bark = function() {
        return "whoof whoof"
    }

    Dog.prototype.eat = function() {
        return '${this.name} eats a lot!'
    }
}

const firstDog = new Dog("Bruno", 2, "Pitbull", "Grey")
const secondDog = new Dog("Smart", 1.5, "German shephard", "Black")

console.log("The name of my first dog is" + firstDog.name)
console.log("The name of my second dog is" + secondDog.name)

console.log("My second dog like to bark" +""+secondDog.bark())
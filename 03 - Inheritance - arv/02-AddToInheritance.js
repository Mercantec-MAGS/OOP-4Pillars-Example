class Animal {
    constructor(name, color, height, weight, sound) {
        this.name = name;
        this.color = color;
        this.height = height;
        this.weight = weight;
        this.sound = sound;
        }
        speak() {
            console.log(`${this.name} says ${this.sound}`);
        }
    }
    class Dog extends Animal {
        come() {
            console.log(`${this.name} ran to you and says ${this.sound}`);
        }
    }
    let animal1 = new Animal("Booby","Brown","17 in","24 pounds","Woof Woof")
    animal1.speak();
    let dog1 = new Dog("Booby","Brown","17 in","24 pounds","Woof Woof","Big Dane")
    dog1.speak();
    dog1.come();
    animal1.come();
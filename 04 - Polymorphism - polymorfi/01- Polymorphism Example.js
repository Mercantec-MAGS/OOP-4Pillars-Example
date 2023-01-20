class Animals {
    speak() {
      throw new Error("This method must be overridden!");
    }
  }
  
  class Dog extends Animals {

  }
  
  class Cat extends Animals {
    speak() {
      console.log("Meow");
    }
  }
  
  const myDog = new Dog();
  const myCat = new Cat();
  
  myCat.speak(); 
  myDog.speak();
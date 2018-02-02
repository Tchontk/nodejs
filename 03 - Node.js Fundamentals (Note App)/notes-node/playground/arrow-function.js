var square = x => x * x
console.log(square(9))

var hello = () => "Hello"
console.log(hello());

var user = {
  name: "toto",
  sayHiAlt: () => { // Arrow function
    // console.log(arguments); // Don't work
    console.log(`Hi. I'm ${this.name}`);
  },
  sayYo() { // Regular function
    console.log(arguments); // Arguments
    console.log(`Hi. I'm ${this.name}`); // This
  }
}

user.sayYo(1, 2, 3)
user.sayHiAlt() // Olala !
// Soal No 1

const golden = () => {
  console.log("this is golden!!")
}
 
golden()

// Soal No 2

const newFunction = (firstName, lastName) =>{
  return {
    firstName, lastName,
    fullName(){
      console.log(firstName + " " + lastName)
      return 
    }
  }
}
 
//Driver Code
const person = newFunction("William", "Imoh");
console.log(person);
person.fullName();  

// Soal No 3

const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}

const { firstName, lastName, destination, occupation, spell} = newObject;

console.log(firstName, lastName, destination, occupation)

// Soal No 4

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west , ...east]

console.log(combined)

// Soal No 5

const planet = "earth";
const view = "glass";
const before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`;

console.log(before) 

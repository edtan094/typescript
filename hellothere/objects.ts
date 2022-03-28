interface Person {
  first: string;
  last: string;
  [key: string]: any
}

const person: Person = {
  first: "Edwin",
  last: "Tan"
}
const person2: Person = {
  first: "Obi-Wan",
  last: "Kenobi",
  Jedi: true
}


interface Animal {
  animal: string,
  legs: number
}

const animal: Animal = {
  animal: "zebra",
  legs: 4
}

const animal2: Animal = {
  animal: "kangaroo",
  legs: 2
}

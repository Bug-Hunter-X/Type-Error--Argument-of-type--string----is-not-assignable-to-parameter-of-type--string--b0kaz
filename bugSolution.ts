function greeter(person: string) {
  return "Hello, " + person;
}

function greeterArray(people: string[]) {
  return people.map(person => "Hello, " + person);
}

let user = ["Jane", "Doe"];

console.log(greeterArray(user)); // Correct: Returns an array of greetings
console.log(greeter(user.join(' '))); // Correct: Joins array elements into a single string
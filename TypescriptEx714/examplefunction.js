var people = [
    { name: "john lee", age: 30 },
    { name: "Marry burner", age: 25 },
    { name: "Harry kill", age: 35 }
];
function filteradults(persons) {
    return persons.filter(function (person) { return person.age >= 30; });
}
var adults = filteradults(people);
console.log(adults);

interface person{
    name:string;
    age:number;
}
const people: person[] =[
    {name:"john lee",age:30},
    {name:"Marry burner",age:25},
    {name:"Harry kill",age:35}
]
function filteradults(persons:person[]):person[]{
    return persons.filter(person=>person.age>=30);
}
const adults = filteradults(people);
console.log(adults);
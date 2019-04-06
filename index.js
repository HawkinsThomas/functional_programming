import {add} from './add';


console.log(add(1,2));


const person = {
    name: "thomas",
    age: 25,
    email: "thomas.hawkins09@gmail.com"
}

const address = {
    street: "broadway",
    city: "Toronto",
    Province: "Ontario"
}

const personWithAddress = {
    ...person,
    ...address
}

console.log(personWithAddress)
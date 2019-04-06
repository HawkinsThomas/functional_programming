import fs from "fs"

//reduce function

let data = fs.readFileSync('data.txt', 'utf8')
    .trim()
    .split('\n')
    .map(line => line.split(','))
    .reduce(function (directory, line){
        directory[line[0]] = directory[line[0]] || []
        directory[line[0]].push({
            name: line[1],
            price: line[2],
            quantity: line[3]
        })
        return directory
    }, {})

let person = {
    name: "Thomas",
    age: 25,
    address: {
        street_name: "Broadway",
        street_num: 120,
        city: "Toronto",
        province: "Ontario"
    }
}

console.log(JSON.stringify(data, null, 2))

let animals = [
    { name: "Fluffykins",   species: "rabbit" },
    { name: "Caro",         species: "dog" },
    { name: "Hamilton",     species: "dog" },
    { name: "Harold",       species: "fish" },
    { name: "Jimmy",        species: "cat" }
]

let orders = [
    {amount: 240},
    {amount: 200},
    {amount: 100},
    {amount: 150},
    {amount: 50}
]

let animal_name = (animal) => animal.name + " is a " + animal.species
let total = orders.reduce(function(return_val, order) {
    return (return_val + order.amount)
}, 0)

//console.log(total)
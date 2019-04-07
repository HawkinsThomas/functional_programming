import fs from "fs"

//reduce example

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

//object literal

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

//recursion

let count_down_from = (number) => {
    if (number == 0){
        return
    }
    else{
        console.log(number)
        count_down_from(number-1)
    }
}

count_down_from(10)

let categories = [
    {id: 'animals', parent: null},
    {id: 'mammals', parent: 'animals'},
    {id: 'cats', parent: 'mammals'},
    {id: 'dogs', parent: 'mammals'},
    {id: 'chuhuahua', parent: 'dogs'},
    {id: 'retreiver', parent: 'dogs'},
    {id: 'persian', parent: 'cats'},
    {id: 'tabby', parent: 'cats'}
]

let makeTree = (categories, parent) => {
    let node = {}
    categories
        .filter(x => x.parent === parent)
        .map(x => node[x.id] = makeTree(categories, x.id))
    return node
}

console.log(
    JSON.stringify(
        makeTree(categories, null)
        , null, 2)
    )

/*
let makeTree = (categories) => {
    categories.reduce((tree, item) => {
        tree[item["id"]] = item["id"] || {}
        console.log(tree[item["id"]])
        return tree
    }, {})
}

*/

let make_tree = (categories, parent) => {
    let node = {}
    categories
        .filter(x => x.parent === parent)
        .forEach(x => node[x.id] = make_tree(categories, x.id)) 
    return node
}

console.log(
    JSON.stringify(
        make_tree(categories, null)
        , null, 2)
    )
let recursive_sum = (number) => {
    if (number == 0){
        return number 
    }

    let sum = number + recursive_sum(number - 1)
    return sum
}

let array_test = [1,2,3,-10]

let smallest = (array) => {
    if (array.length == 2){
        return array[0] < array[1] ? array[0] : array[1];
    } 
    let smallest_num = smallest(array.slice(1))
    return array[0] < smallest_num ? array[0] : smallest_num;
}

let array_sum = (array) => {
    if (array.length == 1){
        return array[0]
    }
    return array[0] + array_sum(array.slice(1))
}

let isPalindrome = (s1) => {
    console.log(s1)
    if (s1.length == 2){
        return s1[0] === s1[1]
    }
    else if (s1.length == 1){
        return true
    }
    return (s1[0] === s1[s1.length -1] && isPalindrome(s1.slice(1,s1.length -1)))
}
    
console.log(isPalindrome('racecar'))
console.log(recursive_sum(10))
console.log(smallest(array_test))
console.log(array_sum(array_test))
    
/*
{
    animals: {
        mammals: {
            dogs:{
                chihuahua: null
                retreiver: null
            }
            cats:{
                persian: null
                tabby: null
            }
        }
    }
}
*/

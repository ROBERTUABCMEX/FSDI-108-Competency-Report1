// ES6  common topics


var numbers = [1,2,3,4];

var result = numbers.map((num) => {
    // do the magic
    return num * 2;
});

console.log(result);

var names = [
    { first: "Nick", last: "Brewer"},
    { first: "Erick", last: "Arroyo"},
    { first: "Katelynn", last: "Heasley"},

];

var fullname = names.map((person) => {
    return person.first + '' + person.last;
});

console.log(fullnames);

// filter

var prices = [45, 234, 78, 123, 21];

var res1 = prices.filter((price) =>{
    // do the magic
    if (price >= 100){
        return true;
    }
    return false;
});

console.log(res1);
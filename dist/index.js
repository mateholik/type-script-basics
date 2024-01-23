//Basic types
let id = 5;
let company = 'test string';
let isPublished = true;
let x = 'hello';
let ids = [2, 5, 75];
let arr = [true, 5, 'seven'];
//Tuple
let person = [1, 'niu', true];
let employee;
employee = [
    ['test', 4],
    ['tes555t', 455],
];
//Union - union type is a powerful feature used to express a value that can be one of several types
let pid = 22;
pid = 'niu';
// Enum - collection of related values. numeric or string
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Right);
const user = {
    id: 5,
    name: 'vlad'
};
//Type Assertion
let cid = 1;
let customerId = cid;
// let customerId = cid as number   can be written like this also
//Functions
function addNumber(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
let user1;
user1 = {
    id: 5,
    name: 'vlad'
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//Generics - like reusable components with placeholders for types
// function getArray(items: any[]): any[] {
//     return new Array().concat(items)
// }
// let numArray = getArray([1,2,3,4, 'niu'])
// let stringArray = getArray(['one', 'two', 'three', 4])
// numArray.push(6)
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let stringArray = getArray(['one', 'two', 'three']);
numArray.push();

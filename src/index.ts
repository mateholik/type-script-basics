//Basic types
let id: number = 5
let company: string = 'test string'
let isPublished: boolean = true
let x: any = 'hello'

let ids: number[] = [2, 5, 75]
let arr: any[] = [true, 5, 'seven']


//Tuple
let person: [number, string, boolean] = [1, 'niu', true]
let employee: [string, number][]
employee = [
    ['test', 4],
    ['tes555t', 455],
] 


//Union - union type is a powerful feature used to express a value that can be one of several types
let pid: string | number = 22
pid = 'niu'


// Enum - collection of related values. numeric or string
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}
enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}
console.log(Direction2.Right);


//Objects
type User = {
    id: number,
    name: string
}
const user: User = {
    id: 5,
    name: 'vlad'
}


//Type Assertion
let cid: any = 1
let customerId = <number>cid
// let customerId = cid as number   can be written like this also



//Functions
function addNumber(x: number, y: number) {
 return x+y
}
function log(message: string | number):void {
    console.log(message);
}


//Interface - for object and functions

interface UserInterface  {
    readonly id: number,
    name: string
    age?: number
}
let user1: UserInterface
user1 = {
    id: 5,
    name: 'vlad'
}
// user1.id = 3333

//When describing object, use interfaces over types. Type can be used with primitives and unions, you can not use interface with primitives or unions
type Point = number | string
const p1: Point = 1

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y 
const sub: MathFunc = (x: number, y: number): number => x - y 


//Generics - like reusable components with placeholders for types
// function getArray(items: any[]): any[] {
//     return new Array().concat(items)
// }
// let numArray = getArray([1,2,3,4, 'niu'])
// let stringArray = getArray(['one', 'two', 'three', 4])
// numArray.push(6)

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}
let numArray = getArray<number>([1,2,3,4])
let stringArray = getArray<string>(['one', 'two', 'three'])
numArray.push()
let a: number;
let b: boolean;
let c: string;
let d: any;

let myArr1: string[];
let myArr2: Array<number>;
let arr: any[];

let my_tuple: [string, number] = ['sb', 29];


const add = (a: number, b: number = 10): number => {
    return a + b;
}
function sub(a: number, b?: number): number {
    if (b) {
        return a - b
    }
    return a - 1
}
const rest = (a: number, ...num: number[]): number => {
    return num.reduce(function(total, num) {
        return total + num
    }, a)
}

// console.log(add(1), sub(4, 2), rest(20, 20, 30, 40))

// union type
const log = (value: string | number) => {
    if (typeof value === "string") {
        return `your string is ${value}`
    }
    if (typeof value === "number") {
        return `your number is ${value}`
    }
    // throw new Error(`Expected string or number, got ${typeof value}`)
}
// console.log(log(1), log("sb"))


class Person {
    firstName: string;
    protected lastName;
    constructor(firstName: string) {
        this.firstName = firstName
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    reportName() {
        console.log(this.fullName())
    }
    greet() {
        console.log("hi")
    }
}
class Coder extends Person {
    greet() {
        console.log("hello world")
    }
    normalGreet() {
        super.greet()
    }
    reportLastName() {
        console.log(this.lastName)
    }
    setLastName(lastName: string) {
        this.lastName = lastName
    }
}
// let aCoder: Person = new Coder("coder") // ok
// let bCoder: Coder = new Person("sb") // error
let cCoder: Coder = new Coder("coder")
cCoder.setLastName("ho")
cCoder.reportLastName()
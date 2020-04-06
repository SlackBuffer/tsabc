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
// let cCoder: Coder = new Coder("coder")
// cCoder.setLastName("ho")
// cCoder.reportLastName()


enum DaysOfTheWeek {
    SUN = 100, MON, TUE, WED, THU, FRI, SAT
}
let day: DaysOfTheWeek;
day = DaysOfTheWeek.MON;
// console.log(day) // 101


interface Named {
    name: string
    print(words: string): void
}
const sayName = (o: Named) => {
    console.log(o.name)
    o.print(o.name)
}
class P {
    name: string
    print() {}
}
var p:Named = new P()
p.name = 'sb'
// sayName(p)

interface PrintCallback {
    (success: boolean): void
}
let printCallback: PrintCallback;
printCallback = (suc: boolean) => { // 签名必须一致

}


type Name = string


let x: any = "hi there"
let ss = (<string>x).substring(0, 4);
// console.log(ss)
function getLength(sth: string | number): number {
    if ((<string>sth).length) {
        return (<string>sth).length
    }
    return sth.toString().length
}
// console.log(getLength("223"), getLength(1234))
interface CC {
    name: string
    age: number
}
let ac = {} as CC
ac.name = 'sb'
ac.age = 29
// ac.firstName = "123" // Property 'firstName' does not exist on type '{}'
let bc = <CC>{
    name: 'ho',
    age: 29
}

class Component {
    private width: number;
    private height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    display(): void {
        console.log(this.height);
    }
}
interface Widget extends Component {
    hide(): void;
}
class Button extends Component implements Widget {
    hide(): void {
        console.log('hiding');
    }
}
let w: Widget = new Button(1, 2);
// console.log(w);
// w.display();
// w.hide();
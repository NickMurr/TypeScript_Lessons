export {};
const message = 'Welcome back';
console.log(message);

const x = 10;
const y = 20;

const title = 'Coderevolution';

const isBeginner: boolean = true;
const total: number = 0;
const name: string = 'Mykyta';
const sentence:string = `my name is ${name}
I am beginner in TypeScript`;

console.log(sentence);

const n: null = null;
const u: undefined = undefined;

const isNew: boolean = null;
const myName: string = undefined;

const list1: number[] = [1, 2, 3];
const list2: Array<number> = [1, 2, 3];

const person1: [string, number] = ['Chris', 35];

enum Color {Red= 55, Green, Blue}

const c: Color = Color.Green;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = 'Nick';
const myVariable: unknown = 10;

function hasName(obj:any):obj is {name:string} {
  return !!obj &&
    typeof obj === 'object' &&
    'name' in obj;
}
if (hasName(myVariable)) {
  console.log(myVariable.name);
}
// (myVariable as string).toUpperCase();

let a;
a = 10;
a = true;

const b = 20;

let multiType: number | boolean;
multiType = 20;
multiType = true;

let anyType: any;
anyType = 20;

// /* Functions */ ==========================================================

function add(num1:number, num2:number = 10): number {
  if (num2) {
    return num1 + num2;
  }
  else {
    return num1;
  }

}

add(5, 10);
add(5);

// /* Interface */ ============================================

interface Person {
  firstName:string;
  lastName:string;
}

function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

const p = {
  firstName: 'Bruce',
  lastName:'Wayne',
};

fullName(p);

// /* Class | Access Modifiers */==============================

class Employee {
  protected employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log(`Good morning ${this.employeeName}`);
  }
}

const emp1 = new Employee('Nick Muraviov');
// console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
  constructor(managerName:string) {
    super(managerName);
  }
  delegateWork() {
    console.log(`Manager delegating tasks ${this.employeeName}`);
  }
}

const m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

const mafe = 2;

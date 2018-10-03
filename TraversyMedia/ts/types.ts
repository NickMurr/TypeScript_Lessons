let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

/*
// let strArr:string[];
// let numArr:number[];
// let boolArr: boolean[];
*/

let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

let strNumTuple: [string, number];

myString = 'Hello'.slice(0, 3);
myNum = 5 + 5;
myBool = true;
myVar = 'Hello';
strArr = ['Hello', 'world'];
numArr = [1, 2, 3];
boolArr = [true, false];

strNumTuple = ['Hello', 4];

let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined;

console.log(myVoid);

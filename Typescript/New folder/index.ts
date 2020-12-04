let x: number = 5;
let s: string = "bar";
let b: boolean = false;

let a: number | string = 25;

let arr:number[] = [1,2,3];
let arr2:[number,string] = [1,"id"];
const arrNum: Array<number> = [1,2,3,4,5];

let j:any = 2; 

function myFunction(a:number = 1,b:number = 2):void {
    console.log(a+b)
}
myFunction(5,6)



type UserType = {
    name: string,
    age:  number,
    x?: boolean,
    info:() => string
}

let user: UserType = {
    name: "Karen",
    age: 25,
    info(){
        return `${this.name}`
    }
}
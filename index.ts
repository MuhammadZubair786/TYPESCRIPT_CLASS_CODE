console.log("test")
let username:string ="asad";
let age:number;
age =10;
let iscomplete :boolean=true;
iscomplete=false;

// union type 
let userage :number | string | boolean | undefined | null=10;
userage="test";
userage=true;
userage=10.90
userage=90


// let arr = [1,2,3,4,""]
// arr.push("test")
// arr.push(1)
// arr.push(12)
// arr.push(true)

// let userarra:[number,string]=[1,"test"]
// userarra.push("test")

// function add(a:number,b:string){

// }

// add("1","56")

// let userarr =[1,2,3,"",true,null]
let userarr:(number|string|boolean)[]=[]
// userarr.push("test")
// userarr.push(true)

// key value pair store

//type ,interface

// `interface EmployeeData  {
//     name : string,
//     email : string,
//     phone?: number,
//     address? : []
// }

// let userobject : EmployeeData= {
//     name : "ali",
//     email:"new@gmail.com",
//     phone :102304
// }

// interface EmployeeData{
//     age? : number
// }


// let userobject1 : EmployeeData= {
//     name : "fatima",
//     email:"fatima@gmail.com",
// }

// console.log(userobject.phone)

// console.log(userobject1.phone)`

// type EmployeeData =  {
//     name : string,
//     age : number,
//     phone? : number,
// }

interface USerEmployee {
    name :string,
   
}

let userObject:USerEmployee = {
    name :"ali",
    age : 23
}

interface USerEmployee{
    age : number
}

// type EmployeeData =  {
//     age : number
// }

let userObject1:USerEmployee = {
    name :"omer",
    age : 45
}
interface USerEmployee{
    phone? :number
}
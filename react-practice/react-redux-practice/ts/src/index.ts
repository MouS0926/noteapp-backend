let a:string="10"
a="hj"


//array

let numArr:number[]=[1,4,8]
let strArr:string[]=["1","4","j"]

let numArr2:Array<number>=[7,8,9]
let strArr2:Array<string>=["j","j","kl"]

//array of objects
type Emp={
    id:Number,
    name:String,
    status:boolean
}

let empArray:Emp[]=[

    {
        id:1,
        name:"mou",
        status:true
    }
]

//intersection  
let num_str:number|string="Hi I am string"
num_str=3

// /Union

type student={
    id:number,
    name:string,
    age:number
}

let emp_std:Emp & student={
    id:1,
    name:"hyu",
    status:true,
    age:3
}

//function

function somethin(a:string){
    console.log(a);
    
}

somethin("nhu")

function mainFun(b:number,fun:(a:string)=>void){
  fun(a)
    
}

mainFun(23,somethin)

// function addition(a,b){
//     return a+b
// }

//normal function
function addition1(a:number,b:number):number{
    return a+b
}

addition1(6,8)

//tupple


let arrTupple:[number,string,string,boolean]=[3,"hi","ki",true]  //direct way declaring tupple

type Tuple=[number,string,string,boolean] //another way,generic way

let abothertpl:Tuple=[9,"jhu","5",true]

// Generics

function myfun1<T>(a:T):T{
    return a
}

myfun1<string>("hy")
myfun1<number>(3)

// interface

interface Teacher{
    id:number,
    name:string
}

interface Student extends Teacher{
    age:number,
    status:boolean
}

let studentObj:Student={
    id:1,
    name:"ani",
    age:45,
    status:true
}
//classes
type colorType="Red"|"yellow"|"green"

class Animal{
    leg:number;color:colorType
    constructor(leg:number,color:colorType){
        this.leg=leg;
        this.color=color
    }
}

class Tiger extends Animal{
    wild:boolean
        constructor(wild:boolean,leg:number,color:colorType)
        {
            super(leg,color)
            this.wild=wild

        }
}


let myanimal=new Tiger(true,4,"green")


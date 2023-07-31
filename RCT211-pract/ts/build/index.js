let a = "10";
a = "hj";
//array
let numArr = [1, 4, 8];
let strArr = ["1", "4", "j"];
let numArr2 = [7, 8, 9];
let strArr2 = ["j", "j", "kl"];
let empArray = [
    {
        id: 1,
        name: "mou",
        status: true
    }
];
//intersection  
let num_str = "Hi I am string";
num_str = 3;
let emp_std = {
    id: 1,
    name: "hyu",
    status: true,
    age: 3
};
//function
function somethin(a) {
    console.log(a);
}
somethin("nhu");
function mainFun(b, fun) {
    fun(a);
}
mainFun(23, somethin);
// function addition(a,b){
//     return a+b
// }
//normal function
function addition1(a, b) {
    return a + b;
}
addition1(6, 8);
//tupple
let arrTupple = [3, "hi", "ki", true]; //direct way declaring tupple
let abothertpl = [9, "jhu", "5", true];
// Generics
function myfun1(a) {
    return a;
}
myfun1("hy");
myfun1(3);
let studentObj = {
    id: 1,
    name: "ani",
    age: 45,
    status: true
};
class Animal {
    constructor(leg, color) {
        this.leg = leg;
        this.color = color;
    }
}
class Tiger extends Animal {
    constructor(wild, leg, color) {
        super(leg, color);
        this.wild = wild;
    }
}
let myanimal = new Tiger(true, 4, "green");
//# sourceMappingURL=index.js.map
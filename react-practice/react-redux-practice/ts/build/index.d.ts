declare let a: string;
declare let numArr: number[];
declare let strArr: string[];
declare let numArr2: Array<number>;
declare let strArr2: Array<string>;
type Emp = {
    id: Number;
    name: String;
    status: boolean;
};
declare let empArray: Emp[];
declare let num_str: number | string;
type student = {
    id: number;
    name: string;
    age: number;
};
declare let emp_std: Emp & student;
declare function somethin(a: string): void;
declare function mainFun(b: number, fun: (a: string) => void): void;
declare function addition1(a: number, b: number): number;
declare let arrTupple: [number, string, string, boolean];
type Tuple = [number, string, string, boolean];
declare let abothertpl: Tuple;
declare function myfun1<T>(a: T): T;
interface Teacher {
    id: number;
    name: string;
}
interface Student extends Teacher {
    age: number;
    status: boolean;
}
declare let studentObj: Student;
type colorType = "Red" | "yellow" | "green";
declare class Animal {
    leg: number;
    color: colorType;
    constructor(leg: number, color: colorType);
}
declare class Tiger extends Animal {
    wild: boolean;
    constructor(wild: boolean, leg: number, color: colorType);
}
declare let myanimal: Tiger;

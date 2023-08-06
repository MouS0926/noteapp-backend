import { ADD, SUB } from "./actionType"

export const addAction=(payload)=>{
    return {type:ADD}
}

export const subAction=(payload)=>{
    return {type:SUB}
}
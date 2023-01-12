import axios from "axios"
let instani = axios.create({
    baseURL:"https://api.themoviedb.org/3",
})

// instani.get() as yeh get()-fn ess baseURL meh eska paramter add kr deta hai.
// axios.create()
// function-suggestion is as like this: functio-name( p1name: p1description or p1datatype , p2name: , soo..onn):function-return-value

export default instani

// function fn1( a , b , c){
//     b = b || 0
//     return a+c

// }

// fn1()

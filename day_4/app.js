const fs = require('fs')

const data_nums = fs.readFileSync('data_nums.txt', {encoding: 'utf-8'})
    .split('\n')
    .filter((x)=>Boolean(x))
    .map((x)=>(x));

 const data_boards_arr = fs.readFileSync('data_boards.txt', {encoding: 'utf-8'})
    .split('\n')
    .filter((x)=>Boolean(x))
    .map((x)=>(x));

const data_boards =()=> {

    let temp_boards = []

    for(let i=0; i<data_boards_arr.length; i+=5){

        temp_boards.push([data_boards_arr[i],data_boards_arr[i+1],data_boards_arr[i+2],data_boards_arr[i+3],data_boards_arr[i+4]])
    }
    return temp_boards
}

const Board = require("./board");

let myBoard = new Board(data_boards()[0])

console.log(myBoard.ro_cols.rows)
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

let all_Boards = []

data_boards().forEach(board => {
    all_Boards.push(new Board(board));
});

const run_a_game =()=>{

    let game_numbers = data_nums[0].split(',');

    let winner = false
    let i=0;

    while(!winner && i<game_numbers.length){
        // for(let i=0; i<game_numbers.length;i++){
            let current_num = game_numbers[i]
            all_Boards.forEach(board=>{
                if(board.check_current_num(current_num)){
                    board.mark_num(current_num);
                    if(board.isWinner()){
                        console.log(parseInt(current_num) * board.unmarked_nums_sum())
                        winner = true
                    }
                };
            })
        // }      
        i++  
    }
}

run_a_game()
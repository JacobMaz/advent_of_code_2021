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

const run_a_game =(board, i)=>{
    console.log('running',board)

    let game_numbers = data_nums[0].split(',');
    let called_numbers = []
    let winner = false

    while(!winner && i<game_numbers.length){

        let current_num = game_numbers[i]
        called_numbers.push(current_num)
        if(board.check_current_num(current_num)){
            board.mark_num(current_num);
            if(board.isWinner()){
                console.log('SOLUTION:', +current_num * board.unmarked_nums_sum())
                winner = true
            }
        };

        i++  
    }
}

const find_last_board =()=>{
    
    let game_numbers = data_nums[0].split(',');

    let current_boards = all_Boards;
    let called_numbers = []
    let winning_boards = []

    for(let i=0; i<game_numbers.length+1;i++){
        if(winning_boards.length===99){
            current_boards.forEach(board=>{
                // console.log(board.has_won)
                if(!board.has_won){
                    run_a_game(board,i)
                }
            })
            break
        }
        let cur_num = game_numbers[i];
        called_numbers.push(cur_num)
        // console.log('called numbers:', called_numbers)
        current_boards.forEach(board=>{
            if(board.check_current_num(cur_num)){
                board.mark_num(cur_num);
                if(board.isWinner() && !winning_boards.includes(board)){
                    winning_boards.push(board)
                    // current_boards = current_boards.splice(current_boards.indexOf(board),1)
                }
            }
        })
    }

}

// run_a_game()

find_last_board()
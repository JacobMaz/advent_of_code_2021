
module.exports = class Board {
    constructor(board){
        this.board = board;
        this.board_values = this.set_board_values();
        this.rows_cols = this.setRows(board);
        this.rows_cols_marked = {
            rows: [
                [],
                [],
                [],
                [],
                [],
            ],
            cols: [
                [],
                [],
                [],
                [],
                [],
            ]
        }
    }

    get getBoard(){
        return this.board
    }

    set_board_values(){
        let b_vals = []
        this.board.forEach(v=>{
            let cur_v = v.split(' ');
            cur_v = cur_v.filter(function(e){return e!=''})
            cur_v.forEach(cv=>{
                b_vals.push(cv)
            })
        })
        return b_vals
    }

    setRows(current_board){

        const pos_value =(r, pos)=>{
            let row_vals = r.split(' ');
            row_vals = row_vals.filter(function(e){return  e!=''})
            return row_vals[pos]
        }

        return {
            rows: [
                [
                    pos_value(current_board[0],0),
                    pos_value(current_board[0],1),
                    pos_value(current_board[0],2),
                    pos_value(current_board[0],3),
                    pos_value(current_board[0],4)
                ],
                [                    
                    pos_value(current_board[1],0),
                    pos_value(current_board[1],1),
                    pos_value(current_board[1],2),
                    pos_value(current_board[1],3),
                    pos_value(current_board[1],4),
                ],
                [
                    pos_value(current_board[2],0),
                    pos_value(current_board[2],1),
                    pos_value(current_board[2],2),
                    pos_value(current_board[2],3),
                    pos_value(current_board[2],4)
                ],
                [
                    pos_value(current_board[3],0),
                    pos_value(current_board[3],1),
                    pos_value(current_board[3],2),
                    pos_value(current_board[3],3),
                    pos_value(current_board[3],4)
                ],
                [                    
                    pos_value(current_board[4],0),
                    pos_value(current_board[4],1),
                    pos_value(current_board[4],2),
                    pos_value(current_board[4],3),
                    pos_value(current_board[4],4)
                ]
            ],
            col: [
                [
                    pos_value(current_board[0],0),
                    pos_value(current_board[1],0),
                    pos_value(current_board[2],0),
                    pos_value(current_board[3],0),
                    pos_value(current_board[4],0)
                ],
                [
                    pos_value(current_board[0],1),
                    pos_value(current_board[1],1),
                    pos_value(current_board[2],1),
                    pos_value(current_board[3],1),
                    pos_value(current_board[4],1)
                ],
                [
                    pos_value(current_board[0],2),
                    pos_value(current_board[1],2),
                    pos_value(current_board[2],2),
                    pos_value(current_board[3],2),
                    pos_value(current_board[4],2)
                ],
                [
                    pos_value(current_board[0],3),
                    pos_value(current_board[1],3),
                    pos_value(current_board[2],3),
                    pos_value(current_board[3],3),
                    pos_value(current_board[4],3)
                ],
                [
                    pos_value(current_board[0],4),
                    pos_value(current_board[1],4),
                    pos_value(current_board[2],4),
                    pos_value(current_board[3],4),
                    pos_value(current_board[4],4)
                ]
            ]
        }
    }

    get ro_cols(){
        return this.rows_cols
    }

    check_current_num(num){
        let board_contains_num = this.board_values.includes(num)

        return board_contains_num
    }

    mark_num(num){

        let rc=0;
        while(!this.isWinner() && rc<this.rows_cols.rows.length){
            if(this.rows_cols.rows[rc].includes(num)){
                this.rows_cols_marked.rows[rc].push(num)
            }
            if(this.rows_cols.col[rc].includes(num)){
                this.rows_cols_marked.cols[rc].push(num)
            }
            rc++
        }
    }

    isWinner(){
        
        let winner=false;
        let rc;
        let ix;

        if(!winner){
            this.rows_cols_marked.rows.forEach((row, index)=>{
                if(row.length===5){
                    ix = index;
                    rc = 'row'
                    winner = true
                }
            })            
        }
        if(!winner){
        this.rows_cols_marked.cols.forEach((col, index)=>{
            if(col.length===5){
                ix = index;
                rc = 'col';
                winner = true
            }
        })
        }

        return winner 
    }

    unmarked_nums_sum(){
        
        let unmarked_nums = this.board_values;
        let marked_nums = [];
        let unmarked_sums = 0;

        this.rows_cols_marked.rows.forEach(row=>{
            row.forEach(num=>{
                if(!marked_nums.includes(num)){
                    marked_nums.push(num)
                }
            })
        })

        marked_nums.forEach(marked=>{
            this.board_values.forEach((val, index)=>{
                if(marked===val){
                    unmarked_nums.splice(index,1)
                }
            })
        })

        unmarked_nums.forEach(num => {
            unmarked_sums += +num
        });

        return unmarked_sums
    }
}
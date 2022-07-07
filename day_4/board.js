
module.exports = class Board {
    constructor(board){
        this.board=board
        this.rows_cols=this.setRows(board)
    }

    get getBoard(){
        return this.board
    }

    setRows(){

        const pos_value =(r, pos)=>{
            let row_vals = r.split(' ');
            row_vals = row_vals.filter(function(e){return  e!=''})
            return row_vals[pos]
        }

        return {
            rows: [
                [
                    {val: pos_value(this.board[0],0), isMarked: false},
                    {val: pos_value(this.board[0],1), isMarked: false},
                    {val: pos_value(this.board[0],2), isMarked: false},
                    {val: pos_value(this.board[0],3), isMarked: false},
                    {val: pos_value(this.board[0],4), isMarked: false}
                ],
                [                    
                    {val: pos_value(this.board[1],0), isMarked: false},
                    {val: pos_value(this.board[1],1), isMarked: false},
                    {val: pos_value(this.board[1],2), isMarked: false},
                    {val: pos_value(this.board[1],3), isMarked: false},
                    {val: pos_value(this.board[1],4), isMarked: false}
                ],
                [
                    {val: pos_value(this.board[2],0), isMarked: false},
                    {val: pos_value(this.board[2],1), isMarked: false},
                    {val: pos_value(this.board[2],2), isMarked: false},
                    {val: pos_value(this.board[2],3), isMarked: false},
                    {val: pos_value(this.board[2],4), isMarked: false}
                ],
                [
                    {val: pos_value(this.board[3],0), isMarked: false},
                    {val: pos_value(this.board[3],1), isMarked: false},
                    {val: pos_value(this.board[3],2), isMarked: false},
                    {val: pos_value(this.board[3],3), isMarked: false},
                    {val: pos_value(this.board[3],4), isMarked: false}
                ],
                [                    
                    {val: pos_value(this.board[4],0), isMarked: false},
                    {val: pos_value(this.board[4],1), isMarked: false},
                    {val: pos_value(this.board[4],2), isMarked: false},
                    {val: pos_value(this.board[4],3), isMarked: false},
                    {val: pos_value(this.board[4],4), isMarked: false}
                ]
            ],
            col: [
                [
                    {val: pos_value(this.board[0],0), isMarked: false},
                    {val: pos_value(this.board[1],0), isMarked: false},
                    {val: pos_value(this.board[2],0), isMarked: false},
                    {val: pos_value(this.board[3],0), isMarked: false},
                    {val: pos_value(this.board[4],0), isMarked: false}
                ],
                [
                    {val: pos_value(this.board[0],1), isMarked: false},
                    {val: pos_value(this.board[1],1), isMarked: false},
                    {val: pos_value(this.board[2],1), isMarked: false},
                    {val: pos_value(this.board[3],1), isMarked: false},
                    {val: pos_value(this.board[4],1), isMarked: false}
                ],
                [
                    {val: pos_value(this.board[0],2), isMarked: false},
                    {val: pos_value(this.board[1],2), isMarked: false},
                    {val: pos_value(this.board[2],2), isMarked: false},
                    {val: pos_value(this.board[3],2), isMarked: false},
                    {val: pos_value(this.board[4],2), isMarked: false}
                ],
                [
                    {val: pos_value(this.board[0],3), isMarked: false},
                    {val: pos_value(this.board[1],3), isMarked: false},
                    {val: pos_value(this.board[2],3), isMarked: false},
                    {val: pos_value(this.board[3],3), isMarked: false},
                    {val: pos_value(this.board[4],3), isMarked: false}
                ],
                [
                    {val: pos_value(this.board[0],4), isMarked: false},
                    {val: pos_value(this.board[1],4), isMarked: false},
                    {val: pos_value(this.board[2],4), isMarked: false},
                    {val: pos_value(this.board[3],4), isMarked: false},
                    {val: pos_value(this.board[4],4), isMarked: false}
                ]
            ]
        }
    }

    get ro_cols(){
        return this.rows_cols
    }
}

const fs = require('fs');
const { type } = require('os');

const data = fs.readFileSync('data.txt', {encoding: 'utf-8'})
    .split('\n')
    .filter((x)=>Boolean(x))
    .map((x)=>(x));

// console.log(data)

let arr_size = 0;

const find_min_max =()=>{

    let xs = [];
    let ys = [];

    data.forEach(line=>{
        let each_line = line.split(' -> ');
        // console.log('LINE', each_line);
        each_line.forEach(xy => {
            let cur_xy = xy.split(',')
            xs.push(+cur_xy[0]);
            ys.push(+cur_xy[1]);
        })
    })

    // console.log('xs',xs);
    // console.log('ys',ys);

    let min_x = Math.min(...xs);
    let max_x = Math.max(...xs);

    let min_y = Math.min(...ys);
    let max_y = Math.max(...ys);

    // console.log('mins', min_x, min_y);
    // console.log('maxs', max_x, max_y);

    return Math.max(max_x, max_y);
}

arr_size = find_min_max();

// console.log(arr_size);

let vent_matrix = Array(arr_size).fill().map(()=>Array(arr_size).fill(0))

console.log('size:', arr_size, vent_matrix.length)
// vent_matrix[0][0] = 'a'
// vent_matrix[0][3] = 'x'
// vent_matrix[3][0] = 'y'

// console.log(vent_matrix)

const fill_vent_matrix =()=>{

    data.forEach(line => {

        let x_match = false;
        let y_match = false;

        let xys = line.split(' -> ');
        
        let x1 = parseInt(xys[0].split(',')[0])-1
        let x2 = parseInt(xys[1].split(',')[0])-1

        let y1 = parseInt(xys[0].split(',')[1])-1
        let y2 = parseInt(xys[1].split(',')[1])-1

        if(x1===0||x2===0||y1===0||y2===0){
            console.log('oops')
        }

        if(check_match(x1,x2)){
            x_match = true;
        }
        if(check_match(y1,y2)){
            y_match = true;
        }

        if(x_match){
            for(let i=Math.min(y1,y2); i<=Math.max(y1,y2); i++){
                vent_matrix[i][x1] += 1
            }
        }
        if(y_match){
            for(let i=Math.min(x1,x2); i<=Math.max(x1,x2); i++){
                vent_matrix[y1][i] += 1
            }
        }

        if(Math.abs(x1-x2)===Math.abs(y1-y2)){
            if(check_diagonal_direction(x1,x2,y1,y2)){
                let ii=0;
                for(let i=Math.min(y1,y2); i<=Math.max(y1,y2); i++){
                    vent_matrix[i][Math.min(x1,x2)+ii] += 1
                    ii++
                }
            } else if(!check_diagonal_direction(x1,x2,y1,y2)){
                let ii=0;
                for(let i=Math.min(x1,x2); i<=Math.max(x1,x2); i++){
                    vent_matrix[Math.max(y1,y2)+ii][i] += 1
                    ii--
                }
            }
        }
    })
}

const check_diagonal_direction =(x1,x2,y1,y2)=>{
    let x = x1-x2
    let y = y1-y2

    let isSameDirection = false

    if((x>0 && y>0) || (x<0 && y<0)){
        isSameDirection = true
    } else if ((x>0 && y<0) || (x<0 && y>0)){
        isSameDirection = false
    }
    return isSameDirection
}

const check_match =(a,b)=>{

    let match = false

    if(a === b){
        match = true
    }

    return match
}

fill_vent_matrix()

const how_many_bad_spots =()=>{
    let sum = 0;

    vent_matrix.forEach(y=>{
        y.forEach(spot=>{
            if(spot>1){
                sum+=1
            }
        })
    })
    return sum
}

console.log(how_many_bad_spots())
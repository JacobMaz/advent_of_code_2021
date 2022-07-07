const fs = require('fs')

const data = fs.readFileSync('data.txt', {encoding: 'utf-8'})
    .split('\n')
    .filter((x)=>Boolean(x))
    .map((x)=>(x));

let f_array = [];
let u_array = [];
let d_array = [];

let horizontal_position = 0;
let depth = 0;
let aim = 0;

const create_direction_arrays =()=>{
    for(let i=0;i<data.length;i++){
        let x = parseInt(data[i].charAt(data[i].length-1));

        if(data[i].startsWith('forward')){
                horizontal_position+=x;
                depth += aim*x;
            // f_array.push(parseInt(data[i].charAt(data[i].length-1)))
        }
        if(data[i].startsWith('up')){
            aim -= x;
            // u_array.push(parseInt(data[i].charAt(data[i].length-1)))
        }
        if(data[i].startsWith('down')){
            aim += x;
            // d_array.push(parseInt(data[i].charAt(data[i].length-1)))
        }
    }
}

const sum =(arr)=> {
    return arr.reduce( (x,y) => x+y, 0);
}

create_direction_arrays();

let f_sum = sum(f_array)
let u_sum = sum(u_array)
let d_sum = sum(d_array)

console.log(horizontal_position*depth)
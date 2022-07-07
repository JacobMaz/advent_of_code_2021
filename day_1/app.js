
const fs = require('fs')

const data = fs.readFileSync('data.txt', {encoding: 'utf-8'})
    .split('\n')
    .filter((x)=>Boolean(x))
    .map((x)=>parseInt(x));

let window_sums_arr = []

const num_is_larger=(x,y)=>{
    if(x>y){
        return true
    } else if(x<=y){
        return false
    }
}

const check_total =()=>{
    let sum = 0;
    for(let i=1; i < data.length-1; i++){
        if(num_is_larger(window_sums_arr[i], window_sums_arr[i-1])){
            sum++
        }
    }
    return sum
}

// console.log(check_total())


const window_sum=(x,y,z)=>{
    return (x+y+z)
}

const create_window_sums_arr =()=>{
    for(let i=1; i < data.length-1; i++){
        window_sums_arr.push(window_sum(data[i-1], data[i], data[i+1]))
    }
}

create_window_sums_arr()

console.log(check_total())
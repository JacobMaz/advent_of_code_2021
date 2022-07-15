
const fs = require('fs');

const data = fs.readFileSync('data.txt', {encoding: 'utf-8'})
    .split(',')
    .filter((x)=>Boolean(x))
    .map((x)=>(+x));

// ** PART ONE

// let crabs_at_each_x_point = Array(Math.max(...data)+1).fill(0)

// for(let i=0; i<data.length; i++){
//     crabs_at_each_x_point[data[i]]++
// }

// let total_fuel_used_to_point = Array(Math.max(...data)).fill(0);

// for(let point=0; point<crabs_at_each_x_point.length; point++){
//     for(let fuel_point=0; fuel_point<total_fuel_used_to_point.length; fuel_point++){
//         total_fuel_used_to_point[fuel_point] += (Math.max(point, fuel_point) - Math.min(point, fuel_point)) * crabs_at_each_x_point[point]
//     }
// }

// console.log(Math.min(...total_fuel_used_to_point))

// ** PART TWO

const numSum = (n) => n * (n+1) / 2;

let crabs_at_each_x_point = Array(Math.max(...data)+1).fill(0)

for(let i=0; i<data.length; i++){
    crabs_at_each_x_point[data[i]]++
}

let total_fuel_used_to_point = Array(Math.max(...data)).fill(0);

for(let point=0; point<crabs_at_each_x_point.length; point++){
    for(let fuel_point=0; fuel_point<total_fuel_used_to_point.length; fuel_point++){
        let distance_to_point = (Math.max(point, fuel_point) - Math.min(point, fuel_point))
        let fuel_to_point = numSum(distance_to_point) * crabs_at_each_x_point[point]
        total_fuel_used_to_point[fuel_point] += fuel_to_point
    }
}

console.log(Math.min(...total_fuel_used_to_point))
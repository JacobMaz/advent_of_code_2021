
const fs = require('fs');

const data = fs.readFileSync('data.txt', {encoding: 'utf-8'})
    .split(',')
    .filter((x)=>Boolean(x))
    .map((x)=>(x));


// ** PART ONE

// const Fish = require('./fish');

// let all_fish = []

// const set_initial_fish =()=>{
//     data.map(x=>{
//         let new_fish = new Fish()
//         new_fish.initial_timer = +x
//         all_fish.push(new_fish)
//     })
// }

// set_initial_fish()

// const run_a_cycle =()=>{
    
//     for(let i=1; i<257; i++){
//         all_fish.forEach(fish=>{
//             if(fish.internal_timer===0){
//                 all_fish.push(new Fish());
//             }
//             fish.cycle()            
//         })
//     }
// }

// run_a_cycle()

// console.log(all_fish.length)

// ** PART TWO

let all_fish = Array(9).fill(0)

for(let i=0; i<data.length; i++){
    all_fish[data[i]]++
}

// console.log(all_fish)

for(let x=1; x<257; x++){
    let fish_on_day_0 = all_fish[0];
    let fish_on_day_1 = all_fish[1];
    let fish_on_day_2 = all_fish[2];
    let fish_on_day_3 = all_fish[3];
    let fish_on_day_4 = all_fish[4];
    let fish_on_day_5 = all_fish[5];
    let fish_on_day_6 = all_fish[6];
    let fish_on_day_7 = all_fish[7];
    let fish_on_day_8 = all_fish[8];

    all_fish[0] = fish_on_day_1
    all_fish[1] = fish_on_day_2
    all_fish[2] = fish_on_day_3
    all_fish[3] = fish_on_day_4
    all_fish[4] = fish_on_day_5
    all_fish[5] = fish_on_day_6
    all_fish[6] = fish_on_day_7 + fish_on_day_0
    all_fish[7] = fish_on_day_8
    all_fish[8] = fish_on_day_0
}

const sum = all_fish.reduce((a,b) => a+b)

console.log(sum)
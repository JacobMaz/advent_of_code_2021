
const fs = require('fs');

const data = fs.readFileSync('data.txt', {encoding: 'utf-8'})
    .split(',')
    .filter((x)=>Boolean(x))
    .map((x)=>(x));


const Fish = require('./fish');

let all_fish = []

const set_initial_fish =()=>{
    data.map(x=>{
        let new_fish = new Fish()
        new_fish.initial_timer = +x
        all_fish.push(new_fish)
    })
}

set_initial_fish()

const run_a_cycle =()=>{
    
    for(let i=1; i<81; i++){
        all_fish.forEach(fish=>{
            if(fish.internal_timer===0){
                all_fish.push(new Fish());
            }
            fish.cycle()            
        })
    }
}

run_a_cycle()

console.log(all_fish.length)
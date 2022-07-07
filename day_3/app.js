const fs = require('fs')

const data = fs.readFileSync('data.txt', {encoding: 'utf-8'})
    .split('\n')
    .filter((x)=>Boolean(x))
    .map((x)=>(x));

let gamma_rate_bin = '';
let epsilon_rate_bin = '';

const create_gam_and_eps =()=>{

    for(let x=0;x<data[0].length;x++){

        let ones = 0;
        let zeros = 0;

        for(let i=0;i<data.length;i++){
            if(data[i].charAt(x)==='1'){
                ones++
            } else {
                zeros++
            }
        }

        if(ones>zeros){
            gamma_rate_bin = gamma_rate_bin+'1'
            epsilon_rate_bin = epsilon_rate_bin+'0'
        } else {
            gamma_rate_bin = gamma_rate_bin+'0'
            epsilon_rate_bin = epsilon_rate_bin+'1'
        }
    }
}

create_gam_and_eps();

// let a = parseInt(x, 2)

console.log((parseInt(gamma_rate_bin, 2)*parseInt(epsilon_rate_bin,2)))
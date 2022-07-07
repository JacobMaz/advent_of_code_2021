
const fs = require('fs')

const data = fs.readFileSync('data.txt', {encoding: 'utf-8'})
    .split('\n')
    .filter((x)=>Boolean(x))
    .map((x)=>(x));

// let gamma_rate_bin = '';
// let epsilon_rate_bin = '';

// const create_gam_and_eps =()=>{

//     for(let x=0;x<data[0].length;x++){

//         let ones = 0;
//         let zeros = 0;

//         for(let i=0;i<data.length;i++){
//             if(data[i].charAt(x)==='1'){
//                 ones++
//             } else {
//                 zeros++
//             }
//         }

//         if(ones>zeros){
//             gamma_rate_bin = gamma_rate_bin+'1'
//             epsilon_rate_bin = epsilon_rate_bin+'0'
//         } else {
//             gamma_rate_bin = gamma_rate_bin+'0'
//             epsilon_rate_bin = epsilon_rate_bin+'1'
//         }
//     }
// }

// create_gam_and_eps();

// // let a = parseInt(x, 2)

// console.log((parseInt(gamma_rate_bin, 2)*parseInt(epsilon_rate_bin,2)))



// STEP TWO:

let ox = [...data]
let co2 = [...data]

const getOneZeros=(values)=>{
    let count = {};

    for (let val of values){
        for(let i=0; i<val.length; i++){
            if(!count[i]){
                count[i] = [0,0];
            }

            let v = +val[i]
            count[i][v]++
        }
    }

    let mins = []
    let max = []

    for(let c of Object.values(count)){
        if(c[0]===c[1]){
            max.push(null)
            mins.push(null)
        } else if(c[0]>c[1]){
            max.push('0');
            mins.push('1')
        } else {
            max.push('1')
            mins.push('0')
        }
    }
    return {
        min: mins,
        max: max
    }
}

let i = 0;

while(ox.length>1){
    let {max} = getOneZeros(ox);
    ox = ox.filter(num=>{
        return max[i]===null ? num[i]==='1' : num[i] === max[i]
    });
    i++
}
const ox_rating = parseInt(ox[0], 2);

i=0;
while(co2.length>1){
    let {min} = getOneZeros(co2);
    co2 = co2.filter(num=>{
        return min[i]===null ? num[i]==='0' : num[i] === min[i]
    });
    i++
}
const co2_rating = parseInt(co2[0], 2)

console.log(ox_rating * co2_rating)
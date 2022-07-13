
module.exports = class Fish {
    constructor(){
        this.internal_timer = 8;
    }

    set initial_timer(num){
        this.internal_timer = num;
    }

    cycle(){
        if(this.internal_timer===0){
            this.internal_timer = 6
        } else {
            this.internal_timer-=1            
        }
    }
}
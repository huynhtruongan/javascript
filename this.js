/* ---| object this |--- */
let lader = {
    // delare step = 0
    step : 0,
    // step ++ and cursor to lader
    up(){ this.step ++; return this},
    // step -- and cursor to lader
    down(){this.step --; return this},
};
console.log(lader.up());
/* ---[ end object this ]--- */
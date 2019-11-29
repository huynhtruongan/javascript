// REF: closures
    // NOTE: lexical scope + function
let view;
function initializeCreate() {
    return function(view){
        view = '🏔';
        console.log('view has been set!')
    }
     
}
const initialize = initializeCreate();
initialize(view);
initialize(view);
initialize(view);

console.log(view)
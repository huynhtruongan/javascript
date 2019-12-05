// REF: HELP build large application
// REF: best oganize variable

let fightModule = (function(){
    var harry = 'potter'
    var voldemort = 'He who must not be named'
    function fight(char1, char2) {
        var attack1 = Math.floor(Math.random() * char1.length);
        var attack2 = Math.floor(Math.random() * char2.length);
            return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
    }

    return {fight: fight}
})();
// NOTE: commonjs and AMD solve two problem we have
// dependency resolution and pollusion of the global scope
// REF: ES6 syntax module
const horward = 'horward';
const noname  = 'He who must not be named';

export default function fightES6(char1, char2){
    const attack1 = Math.floor(Math.random() * char1.length);
    const attack2 = Math.floor(Math.random() * char2.length);
        return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
}
// NOTE: if you don't have defaul you must write {fightES6}
<script type='module'>
    import fightES6 from './module.js';
    console.log(fightES6('ron','jackson'));
</script>

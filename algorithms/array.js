// REF: push, pop, lookup O(1)-unshift, splice,insert, delete O(n)
// REF: dynamic array coppy array and loop this then add new element so sometime push is O(n) with double space
class MyArray{
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index]
    }
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }
    delete(index){
        delete this.data[index];
        this.shift(index);
        return this
    }
    shift(index){
        for(let i = index; i < this.length-1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
}

const newArray = new MyArray();

console.log(newArray.push('hi'));
console.log(newArray.push('hello'));
console.log(newArray.push('guy'));
console.log(newArray.push('??'));

console.log(newArray.data[1])
console.log(newArray.pop());
console.log(newArray);
console.log(newArray.delete(1));


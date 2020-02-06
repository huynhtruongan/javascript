class Point{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek(){
        return this.top;
    }
    push(value){
        const pointer = new Point(value);
        if(this.length===0){
            this.top = pointer;
            this.bottom = pointer;
            this.length++;
            return this
        }else{
            const temp = this.top;
            this.top = pointer;
            this.top.next = temp;
            this.length++;

            return this
        }
    }
    pop(){
        if(this.length===0) return null// if(!this.top)
        if(this.length===1) this.bottom = null;
       
            // const temp = this.top;
            this.top = this.top.next;
            this.length--;

            return this;
        
    }
}
const myStack = new Stack();
console.log(myStack.push("udemy"));
console.log(myStack.push("discord"));
console.log(myStack.push("amazon"));
// console.log(myStack.peek());
console.log(myStack.pop());

console.log(myStack.pop());
console.log(myStack.pop());





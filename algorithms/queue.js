class Point{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek(){
        return this.first;
    }
    enqueue(value){
        const pointer = new Point(value);
        if(this.length === 0){
            this.first = pointer;
            this.last = pointer;
            
        }else{
            this.last.next = pointer;
            this.last = pointer;
        }
        this.length++;

        return this
    }
    dequeue(){
        if(!this.first) return null;
        if(this.length === 1){
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return this;
    }
}
const myQueue = new Queue();

console.log(myQueue.enqueue('udemy'));
// console.log(myQueue.enqueue('amazon'));
// console.log(myQueue.enqueue('nowzone'));
// console.log(myQueue.enqueue('petter'));

console.log(myQueue.dequeue());



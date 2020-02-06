class Point{
    constructor(value){
        this.value = value,
        this.next = null,
        this.prev = null
    }
}
class DoublelyLinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
 
        const point =new Point(value) ;

        this.tail.next = point;
        point.prev = this.tail;

        this.tail = point;
        this.length++;
        return this
    }
    prepend(value){
        const point =new Point(value);

        point.next = this.head;
        this.head.prev = point;

        this.head = point;
        this.length++;
        return this
    }
    printList(){
        let arr = [];
        let item = this.head;
        while(item){
            arr.push(item.value);
            item = item.next;
        }
        console.log(arr)
        return arr
    }
    loop(index){
        // TODO: linked to use to connect with next
        let linked = this.head;
        // TODO: prelinked to connect with front
        // let preLinked = this.head;
        
        for(let i=0; i<=index;i++){
            // NOTE: at i=0 linked=linked.next
            // preLinked = linked;
            linked = linked.next;           
        }
        return{linked:linked}
    }
    insert(index,value){
        // TODO: check worst case
        if(index>=this.length){
            return this.append(value);
        }else if(index<=0){
            return this.prepend(value);
        }
        
        // TODO: loop to index and linked it
        // for(let i=0; i<=index;i++){
        //     preLinked = linked;
        //     linked = linked.next;
        // }
        
        let linked = this.loop(index).linked;
        let preLinked =linked.prev;


        const point = new Point(value);

        point.next = linked;
        linked.prev = point;
        point.prev = preLinked;
        preLinked.next = point;

        this.length++;
        return this
    }
    remove(index){
        // TODO: check worst case
        if(index<=0){
            return this._removeHead();
        }else if(index>=this.length){
            return this._removeTail(index);
        }
        
        
        let linked = this.loop(index-1).linked;
        let preLinked = linked.prev;
        // for(let i=0; i<index; i++){
        //     preLinked = linked;
        //     linked = linked.next;
        // }
        linked = linked.next;
        linked.prev = preLinked;
        preLinked.next = linked;

        this.length--;
        return this
    }
    _removeHead(){
        let point = this.head;

        this.head = point.next;
        this.head.prev = null;

        this.length --;
        return this
    }
    _removeTail(index){

        let linked = this.loop(this.length-2).linked;
        let preLinked = linked.prev;
        // NOTE: this.length-2 because we loop from i=0 to linked to tail

        // for(let i=1; i<this.length; i++){
        //     preLinked = linked;
        //     linked = linked.next;
        // }
        
        preLinked.next = null;
        this.tail = preLinked;
        this.length--;
        return this
    }
    reverse(){
        if(!this.head.next) return this.head;

        let first = this.head;
        this.tail = this.head;
        
        let second = this.head.next;
        while(second){
            let temp = second.next;
            second.next = first;
            second.prev = temp;
            first.prev = second;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this
    }
    
}
// 99-->1-->10-->5-->16-->1000
const myLinkList = new DoublelyLinkedList(10);
myLinkList.append(5);
myLinkList.append(16);
myLinkList.prepend(1);
myLinkList.insert(2,11);
myLinkList.insert(1,200);
myLinkList.insert(-2,99);
myLinkList.insert(15,1000);
// myLinkList.remove(3);
// myLinkList.remove(-1);
// myLinkList.remove(2000);
myLinkList.reverse();





console.log(myLinkList);
myLinkList.printList();
// console.log(myLinkList.head.next.next)

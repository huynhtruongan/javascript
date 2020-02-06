class Point{
    constructor(value){
        this.value = value,
        this.next= null
    }
}
class LinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
 
        const point =new Point(value) ;

        this.tail.next = point;
        this.tail = point;
        this.length++;
        return this
    }
    prepend(value){
        const point =new Point(value);

        point.next = this.head;
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
    _loop(index){
        // TODO: linked to use to connect with next
        let linked = this.head;
        // TODO: prelinked to connect with front
        let preLinked = this.head;
        
        for(let i=0; i<=index;i++){
            // NOTE: at i=0 linked=linked.next
            preLinked = linked;
            linked = linked.next;           
        }
        return{preLinked:preLinked}
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
        
        let preLinked =this._loop(index).preLinked;
        let linked = preLinked.next;

        const point = new Point(value);
        point.next = linked;
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
        
        let preLinked = this._loop(index-1).preLinked;
        let linked = preLinked.next;
        // for(let i=0; i<index; i++){
        //     preLinked = linked;
        //     linked = linked.next;
        // }
        preLinked.next = linked.next;
        this.length--;
        return this
    }
    _removeHead(){
        let point = this.head;
        this.head = point.next;
        this.length --;
        return this
    }
    _removeTail(index){

        let preLinked = this._loop(this.length-2).preLinked;
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
    reverseLinkedList(){
        if(!this.head.next){
            return this.head
        }
        // input linKedList
        // output linkKedList
        let first = this.head;
        this.tail = this.head;
        let second = this.head.next;
        while(second){
            // console.log('first- second', first, second);
            // console.log('head-head.next', this.head, this.head.next);
            let temp = second.next;
            // console.log('temp',temp);
            second.next = first;
            first = second;
            second = temp;
           return this
        }
        this.head.next = null;
        this.head = first;
        // see recursion https://www.geeksforgeeks.org/reverse-a-linked-list/
    }
}
// 99-->1-->10-->200-->5-->11-->16-->1000
const myLinkList = new LinkedList(10);
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
myLinkList.reverseLinkedList()






console.log(myLinkList);
myLinkList.printList();
// console.log(myLinkList.head.next.next)

class HashTable {
    constructor(size){
        this.data = new Array(size);
        
    }
    _hash(key){
        let hash = 0;
        for (let i =0; i< key.length; i++){
            hash= (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
    set(key, value){
       let address =  this._hash(key);
       if(!this.data[address]){
           this.data[address] = [];   
       }
       this.data[address].push([key, value]);
       return this.data
    }
    get(key){
        let address = this._hash(key);
        if(this.data[address]){
            for(let i=0; i < this.data[address].length; i++){
                if(this.data[address][i][0]===key) return this.data[address][i][1]
            }
        }else return undefined;
    }
    keys(){
        let keysArray = [];
        if(this.data){
            for(let i =0; i < this.data.length; i++){
                if(this.data[i]&&this.data[i].length===1){
                    keysArray.push(this.data[i][0][0]);
                }
                if(this.data[i]&&this.data[i].length>1){
                    
                    for(let n = 0; n < this.data[i].length; n++){
                       keysArray.push(this.data[i][n][0]);
                   }
                }
            }
        }
        return keysArray;
    }
}
const myHashTable = new HashTable(2); // worst situation
// const myHashTable = new HashTable(50);

 
console.log(myHashTable.set('grapes', 10000));
console.log(myHashTable.set('apples', 70000));
console.log(myHashTable.set('oranges', 60000));


console.log(myHashTable.get('grapes'));
console.log(myHashTable.get('apples'));
console.log(myHashTable.keys());

// REF: search, insert,lookup, delete O(1)
// REF: fast access but more memory


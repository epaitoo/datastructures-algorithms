class HashTable {
    constructor(size){
      this.data = new Array(size)
    }
  
    // Hash Function which returns an int
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) %     this.data.length
      }
      return hash
    }
  
    // Set function
    set(key, value){
      let address = this._hash(key)
  
      if (!this.data[address]) {
        this.data[address] = []
        // console.log(this.data[address])
      }
      this.data[address].push(key, value);
      // console.log(this.data)
  
      return this.data
    }
  
    // Get Function
    get(key){
      let address = this._hash(key)
      let currentAddress = this.data[address]
  
      if (currentAddress) {
        // console.log(currentAddress[1])
        return currentAddress[1]
      } 
      
      return undefined;
      
    }
  
    keys() {
      const keysArray = [];
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i]){
          keysArray.push(this.data[i][0])
        }
      }
      console.log(keysArray)
  
      return keysArray
    }
    
  }
  
  const myHashTable = new HashTable(50);
  myHashTable.set('grapes', 10000);
  myHashTable.set('apples', 20000);
  myHashTable.set('oranges', 30000);
  myHashTable.set('pineapple', 40000);
  myHashTable.get('apples');
  myHashTable.keys();
  
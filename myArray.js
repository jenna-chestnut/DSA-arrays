const Memory = require('./memory');

let memory = new Memory();

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }

  get(index) {
    // check if index is valid
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    // return value of memory.get function with 'address' of value
    return memory.get(this.ptr + index);
  }
  push(value) {
    // check if we have room in array, if not, resize
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.TORESIZE);
    }

    // set value in memory using address & value
    memory.set(this.ptr + this.length, value);
    this.length++;
  }
  pop() {
    // check if there is anything to pop
    if (this.length === 0) {
      throw new Error('index error');
    }

    // grab item using memory.get, using address / index of last item
    let item = memory.get(this.ptr + this.length - 1);

    // decrease length of array
    this.length--;

    // return value
    return item;
  }
  insert(index, value) {
    // check to ensure index is valid
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    // make sure we have capacity to add item to our array, if not, resize
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.TORESIZE);
    }

    // copy items from index => end of array (including index), move forward 1 space
    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);

    // set value in now open spot
    memory.set(this.ptr + index, value);

    // add 1 to length
    this.length++;
  }
  remove(index) {
    // check if index is valid
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    // copy items from index => end of array (excluding index), move backward one space 
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);

    // remove 1 from length
    this.length--;
  }
  _resize(size) {
    // hold old address
    const oldPtr = this.ptr;

    // find new address for bigger size
    this.ptr = memory.allocate(size);

    // if not enough memory, throw error
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }

    // copy items from old address to new address
    memory.copy(this.ptr, oldPtr, size);

    // free memory from old address
    memory.free(oldPtr);

    // reset capacity
    this._capacity = size;
  }
}
Array.TORESIZE = 3;

module.exports = Array;
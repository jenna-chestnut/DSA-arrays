class Memory {
  constructor() {
    this.memory = new Float64Array(1024);
    this.head = 0;
  }

  // * * 2 3 4 5 first * * * * 11 * * * *
  // 0 1 2 3 4 5 6 
  // 5 = head
  // 6 = what you have
  // '0-5 is full but you have request 6 spots
  // so your spot will start at 6'

  allocate(size) {
    if (this.head + size > this.memory.length) {
      return null;
    }

    let start = this.head;

    this.head += size;
    return start;
  }

  free(ptr) {}

  copy(toIdx, fromIdx, size) {
    if (fromIdx === toIdx) {
      return;
    }

    if (fromIdx > toIdx) {
      // Iterate forwards
      for (let i = 0; i < size; i++) {
        this.set(toIdx + i, this.get(fromIdx + i));
      }
    } else {
      // Iterate backwards
      for (let i = size - 1; i >= 0; i--) {
        this.set(toIdx + i, this.get(fromIdx + i));
      }
    }
  }

  get(ptr) {
    return this.memory[ptr];
  }

  set(ptr, value) {
    this.memory[ptr] = value;
  }
}

module.exports = Memory;
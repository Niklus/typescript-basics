class Queue<T> {
  private data: T[] = [];

  add(item: T) {
    this.data.push(item);
  }

  remove() {
    this.data.shift();
  }
}

const nameQueue = new Queue<string>();

nameQueue.add("Nicholas");
nameQueue.add("31");

const numberQueue = new Queue<number>();
numberQueue.add(31);

console.log(nameQueue);
console.log(numberQueue);

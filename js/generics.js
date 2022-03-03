var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.add = function (item) {
        this.data.push(item);
    };
    Queue.prototype.remove = function () {
        this.data.shift();
    };
    return Queue;
}());
var nameQueue = new Queue();
nameQueue.add("Nicholas");
nameQueue.add("31");
var numberQueue = new Queue();
numberQueue.add(31);
console.log(nameQueue);
console.log(numberQueue);

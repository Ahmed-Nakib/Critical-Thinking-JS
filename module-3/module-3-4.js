//* Array Implementation


class Queue {
    constructor (){
        this.items = [];
    }

    //* 0(1)
    enqueue(value){
        this.items.push(value)
    }

    //*O(n)
    dequeue(){
        if(this.isEmpty()){
            return undefined
        }
        return this.items.shift()
    }

    //*O(1)
    peek(){
        if(this.isEmpty()){
            return undefined
        }
        return this.items(0)
    }

    //*O(n)
    print(){
        console.log("Start -> ", this.items.join(" -> ", " -> end"));
        
    }
}

const queue = new Queue()

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

queue.dequeue()
queue.print(); 
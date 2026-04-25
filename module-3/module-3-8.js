class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++; // fixed
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            console.log("Invalid index");
            return;
        }

        if (index === 0) {
            this.prepend(value);
            return;
        }

        if (index === this.length) {
            this.append(value);
            return;
        }

        const newNode = new Node(value);
        let prev = this.head;

        for (let i = 0; i < index - 1; i++) {
            prev = prev.next;
        }

        newNode.next = prev.next;
        prev.next = newNode;

        this.length++;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            console.log("Invalid index");
            return;
        }

        if (index === 0) {
            this.head = this.head.next;

            if (this.length === 1) {
                this.tail = null;
            }

            this.length--;
            return;
        }

        let prev = this.head;

        for (let i = 0; i < index - 1; i++) {
            prev = prev.next;
        }

        const removedNode = prev.next;
        prev.next = removedNode.next;

        if (index === this.length - 1) {
            this.tail = prev;
        }

        this.length--;
    }

    print() {
        const arr = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            arr.push(currentNode.value); // fixed
            currentNode = currentNode.next;
        }

        console.log(arr);
        return arr;
    }
}


// TEST
const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);

linkedList.prepend(10);
linkedList.prepend(20);
linkedList.prepend(30);

linkedList.insert(2, 99);   // insert at index 2
linkedList.remove(4);       // remove index 4

linkedList.print();
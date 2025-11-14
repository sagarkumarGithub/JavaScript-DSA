class Node{
    constructor(x){
        this.data=x;
        this.next=null;
    }
}

class Stack{
    constructor(){
        this.head=null;
        this.stackSize=0;
    }

    size(){
        return this.stackSize;
    }

    isEmpty(){
        return this.stackSize===0;
    }

    push(x){
        let temp = new Node(x);
        temp.next = this.head;
        this.head = temp;
        this.stackSize++;
    }

    pop(){
        if(this.head === null){
            console.log("Stack is empty");
            return -1e9;
        }
        let res = this.head.data;
        this.head = this.head.next;
        this.stackSize--;
        return res;
    }

    peek(){
        if(this.head === null){
            console.log("Stack is empty");
            return -1e9;
        }
        return this.head.data;
    }
}

// Example usage:
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek()); // Output: 30
console.log(stack.size()); // Output: 3
console.log(stack.pop()); // Output: 30
console.log(stack.isEmpty()); // Output: false
class MyStack{
    constructor(c){
        this.cap=c;
        this.arr=[];
        this.top=-1;
    }

    push(x){
        if(this.top===this.cap-1){
            console.log("Stack is full");
            return;
        }
        this.top++;
        this.arr[this.top]=x;
    }

    pop(){
        if(this.top===-1){
            console.log("Stack is empty");
            return -1e9;
        }
        let res=this.arr[this.top];
        this.top--;
        return res;
    }

    peek(){
        if(this.top===-1){
            console.log("Stack is empty");
            return -1e9;
        }
        return this.arr[this.top];
    }

    isEmpty(){
        return this.top===-1;
    }

    size(){
        return this.top+1;
    }
}

// Example usage:
let stack = new MyStack(5);
stack.push(10);
stack.push(20);
stack.push(30);
// console.log(stack.peek()); // Output: 30
// console.log(stack.size()); // Output: 3
// console.log(stack.pop()); // Output: 30
// console.log(stack.isEmpty()); // Output: false

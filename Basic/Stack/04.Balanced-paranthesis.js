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

function isBalanced(str){
    let s = new MyStack(str.length);

    for(let i=0; i<str.length; i++){
        let x = str[i];

        if(x==="(" || x==="{" || x==="["){
            s.push(x);
        }else{
            if(s.length===0){
                return false;
            }else if(!matching(s.peek(), x)){
                return false;
            }else{
                s.pop();
            }
        }
    }

    return s.isEmpty();
    
}

function matching(a,b){
    return ((a==="(" && b===")") || (a==="{" && b==="}") || (a==="[" && b==="]"));
}

// Example usage:

let str = "){[()]}"; 
if(isBalanced(str)){
    console.log("Balanced");
}else{
    console.log("Not Balanced");
}

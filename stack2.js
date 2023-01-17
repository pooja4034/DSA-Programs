
class node{
    constructor(value)
    {
        if(value==null||value==undefined)
        throw new Error("Initialise node with a valide value");
        this.value=value;
        this.next=null;
    }
}
    class stack
    {
        constructor(value)
        {
            const newNode=new node(value);
            this.top=newNode;
            this.length=1;
        }
        push(value)
        {
            const newNode=new node(value);
            if(!this.length)
            {
                this.top=newNode;
            }
            else{
                newNode.next=this.top;
                this.top=newNode;
            }
            this.length++;
            return this;
        }
        pop()
        {
            let temp=this.top;
            if(!this.height)
            {
                return undefined;
            }
            else
            {
                temp=this.top;
                this.top=temp.next;
                temp.next=null;
            }
            this.length--;
            return temp;
        }
        peek()
        {
            return this.top;
        }
    }
    const newstack=new stack(3);
    newstack.push(5);
    newstack.push(6);
    console.log(newstack);

    console.log("peek");
   console.log(newStack.peek());

   console.log("pop");
   newStack.pop();
   console.log(newStack);

    console.log("peek");
    console.log(newStack.peek());





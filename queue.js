class node{
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
}
class queue
{
    constructor(value)
    {
        const a =new node(value)
        this.front = a;
        this.rear = this.front;
        this.length=1;
    }
    enqueue(data)
    {
        const newnode =new node(data);
        if(!this.length)
        {
            this.rear = newnode;
            this.front = newnode;
    
        }
        else
        {
            this.rear.next=newnode;
            this.rear=newnode;
            this.length++;
        }
        
    }
    dequeue()
    {
        let temp = this.front;
        if(!this.length)return undefined;
        if(this.length==1)
        {
            this.rear = -1;
            this.front = -1;
        }
        else
        {
            temp = this.front;
            this.front = temp.next;
            temp.next = null;
        }
        this.length--;
        return temp;
    }
}
const c = new queue(10);
c.enqueue(20);
c.enqueue(30);
c.enqueue(40);
c.enqueue(50);
console.log(c);
c.dequeue();
console.log(c)

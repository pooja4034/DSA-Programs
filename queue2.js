
class node
{
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
        const newnode=new node(value);
        this.front=newnode;
        this.rear=this.front;
        this.length=1;
    }

    EnQueue(data)
    {
        const newnode=new node(data)

        if(!this.length)
        {
            this.front=newnode;
            this.rear=newnode;
            this.length=1;
        }
        else
        {
            this.rear.next=newnode;
            this.rear=newnode;
            this.length++;
            return this;
        }
    }
}
const Q=new queue(10);
Q.EnQueue(2);
Q.EnQueue(3);
Q.EnQueue(4);
console.log(Q);

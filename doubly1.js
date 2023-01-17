class node
{
    constructor(value)
    {
        this.value=value;
        this.pre=null;
        this.next=null;
    }
}
class Doublylinkedlist
{
    constructor(value)
    {
        const newnode=new node(value);

        this.head=newnode;
        this.tail=newnode;
        this.length=1;
    }
    unshift(value)
    {
        const newNode=new node(value);

        if(!this.length)
        {
            this.head=newNode;
            this.tail=newNode;
        }
        else
        {
            newNode.next=this.head;
            this.head.prev=newNode;
            this.head=newNode;

        }
        this.length++;
        return this;
    }
    shift()
    {
    if(!this.length)
       return undefined;

    let temp=this.head;
    if(this.length==1)
    {
        this.head=null;
        this.tail=null;
    }
    else
    {
        this.head=temp.next;
        this.head.prev=null;
    }
    temp.next=null;
    temp.prev=null;
    this.length--;
    return temp;
    }
}
const dl=new Doublylinkedlist(10);
console.log(dl);
dl.unshift(1);
dl.unshift(2);
dl.unshift(3);
dl.unshift(4);
console.log(dl);
dl.shift();
console.log(dl);

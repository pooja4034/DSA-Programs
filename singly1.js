class node
{
    constructor(data)
    {
        this.value=data,
        this.next=null;
    }
}
//singly link list
class linkedlist2
{
    constructor(data)
    {
        const newnode=new node(data);
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
            this.tail=this.head;
        }
        else
        {
            newNode.next=this.head;
            this.head=newNode;
        }
        this.length++;
        return this;
    }
    //shift()
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
        this.head=this.head.next;
        temp.next=null;
    }
    this.length--;
    return temp;
    }
}
const ll=new linkedlist2(2);
console.log(ll);
ll.unshift(10);
ll.unshift(20);
ll.unshift(30);
ll.unshift(40);
console.log(JSON.stringify(ll));
console.log(ll);
let p1=ll.shift();
console.log(JSON.stringify(ll));
console.log(ll);
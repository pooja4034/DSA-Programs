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
    //push()
    push(value)
    {
        const newNode=new node(value);
        if(!this.length)
        {
            this.head=newNode;
            this.tail=this.head;
        }
        else
        {
            this.tail.next=newNode;
            this.tail=newNode;
        }
        this.length++;
        return this;
    }
    //pop()
    pop()
    {
        if(!this.length)
          return undefined;

        if(this.length==1)
        {
            let temp=this.head;
            this.head=null;
            this.tail=null;
            this.length--;
            return temp;
        }
        else
        {
            let temp=this.head;
            let prev=this.head;

            while(temp.next)
            {
                prev=temp;
                temp=temp.next;
            }
           this.tail=prev;
           this.tail.next=null;
           this.length--;
           return temp;
        }
    }
}
const ll=new linkedlist2(2);
console.log(ll);
ll.push(11);
ll.push(12);
ll.push(13);
ll.push(14);
console.log(JSON.stringify(ll));
console.log(ll);
let p=ll.pop();
console.log(ll);
console.log(JSON.stringify(ll));
console.log(p);
    
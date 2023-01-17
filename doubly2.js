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
    push(value)
    {
        const newnode=new node(value);

        if(!this.length)
        {
            this.head=newnode;
            this.tail=newnode;
        }
        else
        {
            this.tail.next=newnode;
            newnode.pre=this.tail;
            this.tail=newnode;
        }
        this.length++;
        return this;
    }
    pop()
    {
        if(!this.length)
          return undefined;
        let temp=this.tail;
        if(this.length==1)
        {
            this.head=null;
            this.tail=null;
        
        }
        else
        {
            temp.pre.next=null;
            let tail=temp.pre;
            temp.pre=null;
        }
        this.length--;
        return temp;
    }
   
}
const dl=new Doublylinkedlist(10);
console.log(dl);
dl.push(20);
dl.push(30);
dl.push(40);
dl.push(50);
console.log(dl);
dl.pop();
console.log(dl);


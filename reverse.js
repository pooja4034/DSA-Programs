class program5
{
    constructor(maxcapacity) {
        this.data = Array(maxcapacity)
        this.capacity=maxcapacity
        this.currentlength=0
        this.top = -1

    }
    isFull(){
        return this.currentlength==this.capacity;

    }
    isEmpty(){
        return this.currentlength==0;
    }
    push(data)
    {
        if(this.isFull())
        {
            return "overflow";
        }else{
            this.top = this.top+1;
            this.data[this.top] = data;
            this.currentlength++;
        }
    return data
    }
    pop()
    {
        if(this.isEmpty())
        {
            return "underflow";
        }
        else
        {   
            let temp =this.data[this.top]
            this.data[this.top]=temp.next;
            this.top= this.top-1;
            this.currentlength--;
            return temp;

        }
       
    }
    reverse()
    {
        if(this.isEmpty())
        {
            return undefined;
        }
        else
        {
            for (var i = 0; i <= this.currentlength; i++) {
                console.log(this.data[i]);
            }
        }
        
    }
}
const p5 = new program5(5);
console.log(p5);
console.log("push:")
p5.push(20);
console.log(p5);
console.log("push:")
p5.push(22);
console.log(p5);
console.log("push:")
p5.push(24);
console.log(p5);
console.log("reverse:");
p5.reverse();

class stackreverse
{
    constructor(maxcapacity)
    {
        this.data=Array(maxcapacity);
        this.capacity=maxcapacity;
        this.currentlength=0;
        this.top=-1;
    }
    isFull()
    {
        return this.currentlength===this.capacity;
    }
    isEmpty()
    {
        return this.currentlength===0;
    }
    push(data)
    {
        if(!this.isFull())
        {
            this.top=(this.top+1)
            this.data[this.top]=data;
            this.currentlength++;
            if(this.top==1)
            {
                this.top=this.data;
            }
        }
        return data;
    }
    reverse()
    {
        for(let i=this.data.length;i>=0;i--)
          {
            console.log(this.data[i]);
          }
    }
}
const st=new stackreverse(3);
st.push("A");
st.push("B");
st.push("C");
console.log(st);
st.reverse();

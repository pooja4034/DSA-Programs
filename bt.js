class Node
{
    constructor(data)
    {
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
var rootvalue =null;
rootvalue = new Node(1);
rootvalue.left = new Node(2);
rootvalue.right= new Node(3);

rootvalue.left.left = new Node(4);
rootvalue.left.right = new Node(5);

rootvalue.right.left = new Node(6);
rootvalue.right.right = new Node(7);

rootvalue.left.left.left = new Node(8);
rootvalue.left.left.right = new Node(9);
rootvalue.left.right.left = new Node(10);
rootvalue.left.right.right = new Node(11);

rootvalue.right.left.left = new Node(12);
rootvalue.right.left.right = new Node(13);
rootvalue.right.right.left = new Node(14);
rootvalue.right.right.right = new Node(15);

console.log(JSON.stringify(rootvalue));


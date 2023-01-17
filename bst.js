class Node
{
    constructor(data)
    {
        this.data = data;
        this.left =null;
        this.right = null;
    }
}
class BST
{
    constructor(data)
    {
        this.root= null;
    }
    getrootNode()
    {
        return this.root;
    }
    Insert(data)
    {
        var NewNode = new Node(data);
        if(this.root===null)
        {
            this.root=NewNode;
        }
        else
        {
            this.InsertNode(this.root,NewNode)
        }
    }
    InsertNode(node,NewNode)
    {
        if(NewNode.data<node.data)
        {
            if(node.left==null)
            {
                node.left=NewNode;
            }
            else
            {
                this.InsertNode(node.left,NewNode);
            }
        }
        else
        {
            if(node.right==null)
            {
                node.right=NewNode;
            }
            else
            {
                this.InsertNode(node.right,NewNode)
            }
        }
    }
    search(root,data)
    {
        if(!root)
        {
            return false;
        }
        if(root.data == data)
        {
            return true;
        }
        else if(data < root.data)
        {
            return this.search(root.left,data);
        }
        else
        {
            return this.search(root.right,data);
        }
    }

}
const p12 = new BST();
p12.Insert(19);
p12.Insert(11);
p12.Insert(21);
p12.Insert(12);
p12.Insert(31);
console.log(JSON.stringify(p12));
var root = p12.getrootNode();
console.log("               ");
console.log("search:")
console.log(p12.search(p12.root,100));

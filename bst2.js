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
    getrootNode()
    {
        return this.root;
    }
    inorder(node)
    {
        if(node!==null)
        {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }
    preorder(node)
    {
        if(node!==null)
        {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }
    postorder(node)
    {
        if(node!==null)
        {
            
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
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
console.log("Inorder:");
console.log(p12.inorder(root));

console.log("               ");
console.log("Preorder:");
console.log(p12.preorder(root));

console.log("               ");
console.log("postorder:");
console.log(p12.postorder(root));


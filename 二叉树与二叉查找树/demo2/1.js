function Node(data,left,right){         //节点对象
    this.data=data;
    this.left=left;
    this.right=right;
    this.show=function(){
        return this.data;
    }
}
function BST(){
    this.root=null;
    this.insert=insert;
    //this.order=order;
}
function insert(data){
    var n=new Node(data,null,null);
    if(this.root==null){
        this.root=n;
    }else{
        var current=this.root,
            parent;
        while(true){
            parent=current;
            if(data<current.data){
                current=current.left;
                if(current==null){
                    parent.left=n;
                    break;
                }
            }else{
                current=current.right;
                if(current==null){
                    parent.right=n;
                    break;
                }
            }
        }
    }
}
function order(node){
    if(!(node==null)){
        console.log(node.data+" ");
        order(node.left);
        order(node.right);
    }
}
var nums=new BST();
nums.insert(23);
nums.insert(24);
nums.insert(22);
console.log(nums);
order(nums.root);

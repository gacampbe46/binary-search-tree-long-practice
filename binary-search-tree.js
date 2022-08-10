// Do not change this
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {

    constructor() {
      this.root = null;
    }

    insert(val, currentNode=this.root) {
      // Step 1: Create a new TreeNode with val
      const newNode = new TreeNode(val)

      // Step 2: Add add new TreeNode
      if(currentNode === null){
        this.root = newNode;
        return;
      } else if(currentNode.val > val) {
        if(!currentNode.left) currentNode.left = newNode;
        else this.insert(val, currentNode.left)
      } else {
        if(!currentNode.right) currentNode.right = newNode;
        else this.insert(val, currentNode.right)
      }
    }

    search(val,currentNode=this.root) {
      if(!currentNode) {
        return false;
      }else if(currentNode.val === val) {
        return true;
      }
      else if(currentNode.val > val) {
        return this.search(val,currentNode.left)
      }else{
        return this.search(val, currentNode.right)
      }
    }

    preOrderTraversal(currentNode = this.root) {
      if(currentNode === null) return
      console.log(currentNode.val)
      this.preOrderTraversal(currentNode.left)
      this.preOrderTraversal(currentNode.right)
    }


    inOrderTraversal(currentNode = this.root) {
      if(currentNode === null) return
      this.inOrderTraversal(currentNode.left)
      console.log(currentNode.val)
      this.inOrderTraversal(currentNode.right)
    }


    postOrderTraversal(currentNode = this.root) {
      if(currentNode === null) return
      this.postOrderTraversal(currentNode.left)
      this.postOrderTraversal(currentNode.right)
      console.log(currentNode.val)
    }

      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      let queue = [this.root];
      while(queue.length > 0){
        let currentNode = queue.shift();
        console.log(currentNode.val)
        if(currentNode.left) queue.push(currentNode.left);
        if(currentNode.right) queue.push(currentNode.right);
      }
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
    let stack = [this.root]
    while (stack.length > 0){
      let currentNode = stack.pop();
      console.log(currentNode.val);
      if (currentNode.left) stack.push(currentNode.left);
      if (currentNode.right) stack.push(currentNode.right);
    }
  }
  }

  module.exports = { BinarySearchTree, TreeNode };

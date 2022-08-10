const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  // Since this is a BST, min values are sorted to the left
  let min = Infinity;
  let current = rootNode;

  // Case 1: Tree is empty/has only one value
  if(current === null) return
  if(current.left === null && current.right === null) return current.val

  // Case 2: Tree has multiple branches
  while(current){
    if(current.val < min) min = current.val;
    current = current.left;
  }

  return min;
}

function findMaxBST (rootNode) {
  let max = rootNode.val;

  if(rootNode === null) return;
  if(rootNode.right === null) return rootNode.val;

  let current = rootNode;
  while(current) {
    if(current.val > max) max = current.val;
    current = current.right;
  }

  return max;
  // Your code here
}


//       4
//     /   \
//    5     3
//   / \   / \
//  2   7  1  6 

function findMinBT (rootNode) {
let min = Infinity;

let stack = [rootNode]
while (stack.length > 0){
  let currentNode = stack.pop();
  if(currentNode.val < min) min = currentNode.val;
  // console.log(min)
  if (currentNode.left) stack.push(currentNode.left);
  if (currentNode.right) stack.push(currentNode.right);
}

return min;

}


  // Your code here

function findMaxBT (rootNode) {
  // Your code here
}

function getHeight (rootNode) {
  // Your code here
}

function countNodes (rootNode) {
  // Your code here
}

function balancedTree (rootNode) {
  // Your code here
}

function getParentNode (rootNode, target) {
  // Your code here
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}


function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   set the parent that points to it to null

  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}

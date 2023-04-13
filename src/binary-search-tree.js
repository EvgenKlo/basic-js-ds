const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor(){
    this.tree = null;
  }

  root() {
    if(this.tree === null){
      return null;
    } else {
      return this.tree;
    }
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(data) {
    this.tree = addValue(this.tree, data);
    function addValue (node, value){
      if(node === null){
        node = new Node(value)
      }
      if(value === node.data){
        return node;
      }
      if(value < node.data){
        node.left = addValue(node.left, data)
      } else {
        node.right = addValue(node.right, data)
      }
      return node;
    }
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(data) {
    let result;
    function findData(node){
      if(node.data === data){
        result = true;
      } else {
        if(node.data > data){
          if(node.left !== null){
            findData(node.left)
          } else {
            result = false;
          }
        } else {
          if(node.right !== null){
            findData(node.right)
          } else {
            result = false;
          }
        }
      }
    }
    findData(this.tree);
    return result;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data) {
    let result;
    function findData(node){
      if(node.data === data){
        result = node;
      } else {
        if(node.data > data){
          if(node.left !== null){
            findData(node.left)
          } else {
            result = null;
          }
        } else {
          if(node.right !== null){
            findData(node.right)
          } else {
            result = null;
          }
        }
      }
    }
    findData(this.tree);
    return result;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    console.dir(data)
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let result;
    function findData(node){
      if(node.left === null){
        result = node.data;
      } else {
        findData(node.left)
      }
    }
    findData(this.tree);
    return result;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    let result;
    function findData(node){
      if(node.right === null){
        result = node.data;
      } else {
        findData(node.right)
      }
    }
    findData(this.tree);
    return result;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};
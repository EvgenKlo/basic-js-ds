const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(data) {
    const newNode = new Node(data);
    if (this.tree === null) {
      this.tree = newNode;
    } else {
      let node = this.tree;
      while (data !== node.data) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = newNode;
            break;
          } else {
            node = node.left;
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = newNode;
            break;
          } else {
            node = node.right;
          }
        }
      }
    }
    // this.tree = addValue(this.tree, data);
    // function addValue(node, value) {
    //   if (node === null) {
    //     node = new Node(value);
    //   }
    //   if (value === node.data) {
    //     return node;
    //   }
    //   if (value < node.data) {
    //     node.left = addValue(node.left, data);
    //   } else {
    //     node.right = addValue(node.right, data);
    //   }
    //   return node;
    // }
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(data) {
    let node = this.tree;

    while (true) {
      if (node === null) {
        return false;
      } else {
        if (data === node.data) {
          return true;
        } else if (data < node.data) {
          node = node.left;
        } else if (data > node.data) {
          node = node.right;
        }
      }
    }
    // function findData(node) {
    //   if (node.data === data) {
    //     result = true;
    //   } else {
    //     if (node.data > data) {
    //       if (node.left !== null) {
    //         findData(node.left);
    //       } else {
    //         result = false;
    //       }
    //     } else {
    //       if (node.right !== null) {
    //         findData(node.right);
    //       } else {
    //         result = false;
    //       }
    //     }
    //   }
    // }
    // findData(this.tree);
    // return result;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data) {
    let node = this.tree;

    while (true) {
      if (node === null) {
        return null;
      } else {
        if (data === node.data) {
          return node;
        } else if (data < node.data) {
          node = node.left;
        } else if (data > node.data) {
          node = node.right;
        }
      }
    }
    // let result;
    // function findData(node) {
    //   if (node.data === data) {
    //     result = node;
    //   } else {
    //     if (node.data > data) {
    //       if (node.left !== null) {
    //         findData(node.left);
    //       } else {
    //         result = null;
    //       }
    //     } else {
    //       if (node.right !== null) {
    //         findData(node.right);
    //       } else {
    //         result = null;
    //       }
    //     }
    //   }
    // }
    // findData(this.tree);
    // return result;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    let parentNode = null;
    let node = this.tree;

    while (true) {
      if (node === null) {
        break;
      } else {
        if (data === node.data) {
          if ((node.left === null) ^ (node.right === null)) {
            if (parentNode.left === node) {
              if (node.left !== null) {
                parentNode.left = node.left;
                break;
              } else if (node.right !== null) {
                parentNode.left = node.right;
                break;
              }
            } else if (parentNode.right === node) {
              if (node.left !== null) {
                parentNode.right = node.left;
                break;
              } else if (node.right !== null) {
                parentNode.right = node.right;
                break;
              }
            }
          } else if (node.left === null && node.right === null) {
            if (parentNode.left === node) {
              parentNode.left = null;
              break;
            } else if (parentNode.right === node) {
              parentNode.right = null;
              break;
            }
          } else if (node.left !== null && node.right !== null) {
            let nodeMax = node.right;

            while (true) {
              if (nodeMax.left === null) {
                break;
              }

              nodeMax = nodeMax.left;
            }

            nodeMax.left = node.left;
            nodeMax.right = node.right;

            if (parentNode.left === node) {
              parentNode.left = nodeMax;
              break;
            } else if (parentNode.right === node) {
              parentNode.right = nodeMax;
              break;
            }
          }
        } else if (data < node.data) {
          parentNode = node;
          node = node.left;
        } else if (data > node.data) {
          parentNode = node;
          node = node.right;
        }
      }
    }

    // console.dir(data);
    /* function removeNode(node, data){
      
    }
    this.tree = removeNode(this.tree, data); */
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let node = this.tree;

    while (true) {
      if (node === null) {
        return null;
      }

      if (node.left === null) {
        return node.data;
      }

      node = node.left;
    }
    // let result;
    // function findData(node) {
    //   if (node.left === null) {
    //     result = node.data;
    //   } else {
    //     findData(node.left);
    //   }
    // }
    // findData(this.tree);
    // return result;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    let node = this.tree;

    while (true) {
      if (node === null) {
        return null;
      }

      if (node.right === null) {
        return node.data;
      }

      node = node.right;
    }
    // let result;
    // function findData(node) {
    //   if (node.right === null) {
    //     result = node.data;
    //   } else {
    //     findData(node.right);
    //   }
    // }
    // findData(this.tree);
    // return result;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};

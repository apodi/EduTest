class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  
    add(data) {
      if (data <= this.data && this.left) {
        this.left.add(data);
      } else if (data <= this.data) {
        this.left = new Node(data);
      } else if (data > this.data && this.right) {
        this.right.add(data);
      } else if (data > this.data) {
        this.right = new Node(data);
      }
    }
  
    inOrderTraverse() {
      let stack = [];
      let result = [];
      let current = this;
  
      while (current !== null || stack.length > 0) {
        while (current !== null) {
          stack.push(current);
          current = current.left; 
        }
  
        current = stack.pop(); 
        result.push(current.data);
  
        current = current.right; 
      }
  
      return result;
    }
    
  }

  function bstSort(stringsArray) {
    if (stringsArray.length === 0) return [];

    let root = new Node(stringsArray[0]);

    for (let i = 1; i < stringsArray.length; i++) {
        root.add(stringsArray[i]);
    }
    return root.inOrderTraverse();
}

module.exports = bstSort;
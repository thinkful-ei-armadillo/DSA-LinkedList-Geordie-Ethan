const LinkedList = require('./LinkedList');

const main = function () {

  // const SLL = new LinkedList();

  // SLL.insertFirst('Apollo');
  // SLL.insertFirst('Boomer');
  // SLL.insertFirst('Helo');
  // SLL.insertFirst('Husker');
  // SLL.insertFirst('Starbuck');

  // SLL.insertFirst('Tauhida');

  // SLL.remove('squirrel');

  // SLL.insertBefore('Athena', 'Boomer');

  // SLL.insertAfter('Hotdog', 'Helo');

  // SLL.insertAt('Kat', 2);

  // SLL.remove('Tauhida');

  // console.log(size(SLL));

  // console.log(isEmpty(SLL));

  // console.log(isEmpty(new LinkedList()));

  // console.log(findLast(SLL));

  // console.log(findPrevious(SLL, 'Athena'));


  // Assignment #4
  // The program removes all subsequent duplicate values
  // O(n^2) Polynomial (Quadratic)


  const letterList = new LinkedList();
  letterList.insertLast('a')
  letterList.insertLast('b')
  letterList.insertLast('c')
  letterList.insertLast('d')
  letterList.insertLast('e')
  letterList.insertLast('f')
  letterList.insertLast('g')

  debug(letterList);
  console.log('-------');
  reverseList(letterList);
  debug(letterList);


  // debug(SLL);


};

const debug = function (list) {

  if (list.head === null) {
    console.log(null);

  } else {

    let node = list.head;

    while(node !== null) {
      console.log(node.value);
      node = node.next;
    }
  }
};

const display = function (list) {

  if (list.head === null) {
    console.log(null);
  } else {

    let node = list.head;

    while(node !== null) {
      console.log(node.value);
      node = node.next;
    }
  }
};

const size = function (list) {

  let size = 0;
  let currNode = list.head;

  while (currNode !== null) {
    currNode = currNode.next;
    size++;
  }

  return size;
};

const isEmpty = function (list) {

  return list.head === null;
};

const findPrevious = function (list, targetValue) {

  let prevNode = null;
  let currNode = list.head;

  while (currNode.value !== targetValue) {
    prevNode = currNode;
    currNode = currNode.next;

    // Bad target value
    if (currNode.next === null) {
      return null;
    }
  }

  return prevNode;
};

const findLast = function (list) {

  let currNode = list.head;

  while (currNode.next !== null) {
    currNode = currNode.next;
  }

  return currNode;
};

const reverseList = function (list) {

  // If list is empty
  if (list.head === null) {
    return list;
  }

  let previousNode = null;
  let currentNode  = list.head;

  // from first to last node
  while (currentNode.next !== null) {

    currentNode.next = previousNode;
    previousNode = currentNode;
  }


  // each node should point to the one before it
  // the first node should point to null
  // the head should point to last node





// --------------------


  // let currentNode = list.head;
  // let tempNode      = null;
  // let tempNextValue = null;

  // while (currentNode !== null && currentNode.next !== null) {

  //   currentNode.next = tempNextValue;
  //   tempNextValue = currentNode;

  //   currentNode = currentNode.next;
  // }

  // // handle the last node in list here
  // currentNode.next = tempNextValue;
  // list.head = currentNode;




  // First item
    // next = null
    // loop

  // second item
    // next to the node from the previous loop
    // loop

  // for last item (where item.next === null)
    // next to the node from the previous loop
    // list.head this current item


};

main();

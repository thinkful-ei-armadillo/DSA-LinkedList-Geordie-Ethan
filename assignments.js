const LinkedList = require('./LinkedList');

const main = function () {

  const SLL = new LinkedList();

  SLL.insertFirst('Apollo');
  SLL.insertFirst('Boomer');
  SLL.insertFirst('Helo');
  SLL.insertFirst('Husker');
  SLL.insertFirst('Starbuck');

  SLL.insertFirst('Tauhida');

  SLL.remove('squirrel');

  SLL.insertBefore('Athena', 'Boomer');

  SLL.insertAfter('Hotdog', 'Helo');

  SLL.insertAt('Kat', 2);

  SLL.remove('Tauhida');

  console.log(size(SLL));

  console.log(isEmpty(SLL));

  console.log(isEmpty(new LinkedList()));

  console.log(findLast(SLL));

  console.log(findPrevious(SLL, 'Athena'));

  debug(SLL);


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


main();

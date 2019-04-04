const LinkedList = require('./LinkedList');

const main = function () {

  const SLL = new LinkedList();

  SLL.insertFirst('Apollo');
  SLL.insertFirst('Boomer');
  SLL.insertFirst('Helo');
  SLL.insertFirst('Husker');
  SLL.insertFirst('Starbuck');

  SLL.insertFirst('Tauhida');

  // SLL.remove('squirrel');


  SLL.insertBefore('xxxxxx', 'Helo');


  debug(SLL);
};

const debug = function (list) {

  if (list.head === null) {
    console.log(null);

  } else {

    let node = list.head;
    while(node.next !== null) {
      console.log(node.value);
      node = node.next;
    }
  }
};

main();

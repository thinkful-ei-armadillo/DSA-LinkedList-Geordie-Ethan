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

main();

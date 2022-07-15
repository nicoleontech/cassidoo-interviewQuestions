//      11/7/2022

/*Given a linked list, such that each node contains an additional random pointer which could point to any node in the list,
 or null, make a deep copy of the list and return the head node of the new copy.*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.random = null;
  }
}

const deepCloneList = (head) => {
  if (!head) return null;

  let curr = head;

  //duplicate the original nodes
  while (curr) {
    const copy = new Node(curr.value);
    copy.next = curr.next;
    curr.next = copy;
    curr = curr.next.next;
  }

  // map random pointers on all new nodes
  curr = head;
  while (curr) {
    curr.next.random = curr.random ? curr.random.next : null;
    curr = curr.next.next;
  }

  // Separate original and copied lists
  curr = head;
  const copiedHead = head.next;

  let copied = copiedHead;

  while (curr) {
    curr.next = curr.next.next;
    curr = curr.next;
    copied.next = copied.next ? copied.next.next : null;
    copied = copied.next;
  }

  return copiedHead;
};

// Adding Nodes to the list

let start = new Node(1);
start.next = new Node(2);
start.next.next = new Node(3);
start.next.next.next = new Node(4);
start.next.next.next.next = new Node(5);

//Set the random pointers

start.random = start.next.next; // 1's random points to 3

start.next.random = start; // 2's random points to 1

start.next.next.random = start.next.next.next.next; // 3's and 4's random points to 5
start.next.next.next.random = start.next.next.next.next;

start.next.next.next.next.random = start.next; // 5's random points to 2

let clonedList = deepCloneList(start);

console.log(clonedList);

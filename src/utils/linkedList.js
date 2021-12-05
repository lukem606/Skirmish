export default class LinkedList {
  constructor(value = null) {
    this.head = value;
    this.tail = value;
    this.length = value == null ? 0 : 1;
  }

  getAll() {
    const contents = [];
    let node = this.head;

    while (node) {
      contents.push(node.value);
      node = node.next;
    }

    return contents;
  }

  printList() {
    const contents = [];
    let currentList = this.head;

    while (currentList !== null) {
      contents.push(currentList);
      currentList = currentList.next;
    }

    console.log([...contents]);
  }

  prepend(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }

    this.length++;
  }

  append(value) {
    const newNode = new Node(value);

    console.log(this.head);
    console.log(this.tail);
    console.log(this.length);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }

    this.length++;
  }

  insert(value, index) {
    if (index < 0 || index > this.length || !Number.isInteger(index)) {
      console.warn(
        `Index is not a valid integer! Current length ${this.length}`
      );
      return;
    }

    if (index === 0) {
      this.prepend(value);
    } else if (index === this.length) {
      this.append(value);
    } else {
      const newNode = new Node(value);

      let previousNode = this.head;

      for (let i = 0; i < index - 1; i++) {
        previousNode = previousNode.next;
      }

      const nextNode = previousNode.next;

      newNode.next = nextNode;
      previousNode.next = newNode;
      newNode.previous = previousNode;
      nextNode.previous = newNode;
    }

    this.length++;
  }

  remove(value) {
    let node = this.head;

    while (node) {
      if (node.value === value) {
        if (node.previous && node.next) {
          node.previous.next = node.next;
          node.next.previous = node.previous;
        } else if (node.previous) {
          this.tail = node.previous;
          this.tail.next = null;
        } else if (node.next) {
          this.head = node.next;
          this.head.previous = null;
        } else {
          this.head = null;
          this.tail = this.head;
        }

        this.length--;
        return;
      }

      node = node.next;
    }

    console.warn(`"${value}" not found in list!`);
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

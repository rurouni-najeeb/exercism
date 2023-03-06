class Node {
  _value: unknown;
  _next: Node | null;

  constructor(value: unknown) {
    this._value = value;
    this._next = null;
  }

  // Setter functions
  public set next(node: Node | null) {
    this._next = node;
  }

  // Getter functions
  public get value(): unknown {
    return this._value;
  }

  public get next(): Node | null {
    return this._next;
  }
}

export class List {
  _head: Node | null;
  _tail: Node | null;
  _length: number;

  constructor(values: unknown[]) {
    let prev: Node | null = null;
    this._head = null;
    this._tail = null;
    this._length = 0;

    values.forEach((element) => {
      if (element instanceof List) {
        let newList = this.concat(element);
        this._head = newList.head;
        this._tail = newList.tail;
        this._length = newList.length();
      } else this.push(element);
    });
  }

  private push(value: unknown) {
    let node = new Node(value);
    this._length++;

    if (this._head === null) {
      this._head = node;
      this._tail = node;
      return;
    }

    this._tail!.next = node;
    this._tail = node;
  }

  public forEach(callback: (item: unknown) => void) {
    let ptr = this._head;
    while (ptr !== null) {
      callback(ptr.value);
      ptr = ptr.next;
    }
  }

  public append(other: List): List {
    let ptr = other.head;

    while (ptr !== null) {
      this.push(ptr.value);
      ptr = ptr.next;
    }
    return this;
  }

  public concat(other: List): List {
    var concatList = List.create();
    concatList.append(this);
    concatList.append(other);
    return concatList;
  }

  public filter<T>(callback: (item: T) => boolean): List {
    let ptr = this._head;
    var newList = List.create();

    while (ptr !== null) {
      if (callback(ptr.value as T)) newList.push(ptr.value);

      ptr = ptr.next;
    }
    return newList;
  }

  public length(): number {
    return this._length;
  }

  public map<T>(callback: (item: T) => void) {
    throw new Error("Not Implemented");
  }

  public foldl<T, R>(callback: (item1: T, item2: T) => T, constant: T): T {
    var acc: T = constant;
    let ptr = this._head;
    while (ptr !== null) {
      acc = callback(acc, ptr.value as T);
      ptr = ptr.next;
    }
    return acc;
  }

  public foldr<T, R>(callback: (item1: T, item2: T) => T, constant: R) {
    throw new Error("Not Implemented");
  }

  public reverse() {
    let ptr = this._head;
    if (ptr !== null) {
      let values: typeof ptr.value[] = [];
      return new List(values);
    }
    return this;
  }

  // Getter implementation
  public get head(): Node | null {
    return this._head;
  }
  public get tail(): Node | null {
    return this._tail;
  }
  public static create(...values: unknown[]): List {
    // Do *not* construct any array literal ([]) in your solution.
    // Do *not* construct any arrays through new Array in your solution.
    // DO *not* use any of the Array.prototype methods in your solution.

    // You may use the destructuring and spreading (...) syntax from Iterable.
    return new List(values);
  }
}

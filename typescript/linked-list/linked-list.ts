class Node<T> {
  _right : Node<T> | null;
  _left : Node<T> | null;
  _value : T;
  constructor(element : T){
    this._value = element;
    this._right = null;
    this._left = null;
  }

  // Getters definition
  get value() : T{
    return this._value;
  }
  get right() : Node<T> | null{
    return this._right;
  }
  get left() : Node<T> | null{
    return this._left
  }

  // Setter definition
  set value(input : T){
    this._value = input;
  }
  set right(input : Node<T> | null){
    this._right = input
  }
  set left(input : Node<T> | null){
    this._left = input
  }

};

export class LinkedList<TElement> {
  _head : Node<TElement> | null;
  _tail : Node<TElement> | null;

  constructor(){
    this._head = null;
    this._tail = null;
  }

  public push(element: TElement) {
    // Create a node for the element
    let node = new Node<TElement>(element);
    
    // If the list is empty
    if(this._head === null){
      this._head = node;
      this._tail = node;
    }
    else{
      this._tail!.right = node;
      node.left = this._tail;
      this._tail = node;
    }
  }

  public pop(): TElement | never {
    if(this._head === null || this._tail === null)
      throw new Error('Cannot pop from an empty list')
    
    // Push back the tail
    let node = this._tail;
    this._tail = node.left;

    // Popping the last element in the list
    if(this._tail === null)
      this._head = null;
    
    // Orphan the node
    node.left = null;
    node.right = null;
    return node.value;
  }

  public shift(): TElement | never {
    if(this._head === null)
      throw new Error('Cannot shift from an empty list');
    
    // Move the head pointer
    let node = this._head;
    this._head = node.right;

    // Popping the last element in the list
    if(this._head === null)
      this._tail = null;

    // Orphan the node
    node.left = node.right = null;
    return node.value;

  }

  public unshift(element: TElement) {
    let node = new Node<TElement>(element);

    if(this._head === null)
      this._head = this._tail = node;
    else{
      node.right = this._head;
      this._head.left = node;
      this._head = node;
    }
  }

  public delete(element: TElement) : void | never {
    let ptr = this._head;
    while(ptr !== null){
      if(ptr.value === element){
        if(ptr.left !== null)
          ptr.left!.right = ptr.right;
        else if(ptr.right !== null)
          ptr.right!.left = ptr.left;
        else
          this._head = this._tail = null;
        return
      }
      ptr = ptr.right
    }
  }

  public count(): number {
    let ptr = this._head;
    let num_elements : number = 0;
    while(ptr !== null){
      num_elements++;
      ptr = ptr.right
    }
    return num_elements;
  }
}

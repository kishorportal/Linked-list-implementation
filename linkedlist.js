class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;

    }
    //this method is a recursive solution where we are appending values in a linked list
    append(val) {
        if (this.head === null) {
            this.head = new Node(val);
            return;
        }
        let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next;
        }
        curr.next = new Node(val);
    }
    //this append method is recursive way of doing it by using helper function
    // append(val){
    //     if(this.head === null){
    //       this.head = new Node(val);
    //       return;
    //     }
    //     return this._append(val,this.head);

    //     }
    //     _append(val,curr){
    //      if(curr.next === null){
    //        curr.next = new Node(val);
    //        return;
    //      }
    //      this._append(val,curr.next)
    //     }
    //this print method is an iterative solution where we are printing elements in a linked list
    print() {
        let curr = this.head;
        let str = '';
        while (curr !== null) {
            str += curr.val + '->';
            curr = curr.next;
        }
        return str;
    }
    //this print method is an recursive solution with the help of helper function
    // print(){
    //     const output = this._print(this.head);
    //     console.log(output);
    //     }
    //     _print(curr){
    //       if(curr === null) return '';
    //       return curr.val + this._print(curr.next)
    //     }
    //this contains method is iterative solution where we are checking whether element exists in linkedlist
    contains(target) {
        let curr = this.head;
        while (curr !== null) {
            if (curr.val === target) {
                return true;
            }
            curr = curr.next;
        }
        return false;

    }
    //this contains method is recursive solution
    // contains(target){
    //     return this._contains(target,this.head)
    //    }
    //    _contains(target,curr){
    //     if(curr.next === null) return false;
    //     if(curr.val === target) return true;
    //    return this._contains(target,curr.next);

    //    }
}

const list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
console.log(list.print());
console.log(list.contains('a'));
console.log(list.contains('b'));
console.log(list.contains('c'));
console.log(list.contains('1'));
console.log(list.contains('2'));
console.log(list.head);

/*
sumlist method is used to sum all the elements in the linked list
const list = new LinkedList();
list.append(11);
list.append(7);
list.append(2);
list.append(10);
list.print();
const sumList = (head) => {
    let curr = head;
    let sum = 0;
    while (curr !== null) {
        sum += curr.val;
        curr = curr.next;
    }
    return sum;

}
const sumList = (head) => {
    if (head === null) return 0;
    return head.val + sumList(head.next);
}
console.log(list.contains('a'));
console.log(sumList(list.head));
*/

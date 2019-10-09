const Node = require('./node');

class LinkedList {

    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        this.data = data;
        var node = new Node(this.data);

        if (this.length == 0) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }

        this.length++;

        return this;
    }

    head() {
        if (this._head == null) {
            return null;
        } else {
            return this._head.data;
        }
    }

    tail() {
        if (this._tail == null) {
            return null;
        } else {
            return this._tail.data;
        }
    }

    at(index) {
        this.index = index;
        var elem = this._head;

        if (this.index == this.length - 1) {
            elem = this._tail;
        } else {
            for (let i = 0; i < this.index; i++) {
                elem = elem.next;
            }
        }
        return elem.data;
    }

    insertAt(index, data) {
        this.index = index;
        this.data = data;
        var node = new Node(this.data);
        var elem = this._head;

        if (this.length == 0) {
            this._head = node;
            this._tail = node;
        } else if (this.index == 0) {

            this._head.prev = node;
            node.next = this._head;
            this._head = node;

        } else if (this.index == this.length) {

            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;

        } else {
            for (let i = 0; i < this.index - 1; i++) {
                elem = elem.next;
            }
            var elemNext = elem.next;

            node.next = elem.next;
            elemNext.prev = node;

            elem.next = node;
            node.prev = elem;
        }
        this.length++;

        return this;
    }

    isEmpty() {
        return (this.length == 0);
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;

        return this;
    }

    deleteAt(index) {
        this.index = index;
        var elem = this._head;

        if (this.index == 0) {
            this._head = this._head.next;
        } else if (this.index == this.length - 1) {
            this._tail = this._tail.prev;
        } else {

            for (let i = 1; i < this.index; i++) {
                elem = elem.next;
            }
            var prevDelete = elem.prev;
            var nextDelete = elem.next;

            prevDelete.next = elem.next;
            nextDelete.prev = elem.prev;
            elem = null;
        }

        this.length--;

        return this;
    }

    reverse() {

        var current = this._head;

        while (current != null) {

            var temp = current.prev;
            current.prev = current.next;
            current.next = temp;

            current = current.prev;
        }

        var tempForHead = this._head;
        this._head = this._tail;
        this._tail = tempForHead;

        return this;
    }

    indexOf(data) {
        this.data = data;
        var elem = this._head;
        var result = -1;

        for (var i = 0; i < this.length; i++) {
            if (elem.data == this.data) {
                return i;
            }
            elem = elem.next;
        }
        return result;
    }
}

module.exports = LinkedList;
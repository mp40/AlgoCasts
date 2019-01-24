// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }
    insertFirst(data){
        this.head = new Node(data, this.head)
    }
    size(){
        let counter = 0;
        let node = this.head
        while(node){
            counter++
            node = node.next
        }
        return counter
    }
    getFirst(){
        return this.head
    }
    getLast(){
        let node = this.head
        while(node){
            if (!node.next){
                return node
            }
            node = node.next
        }
    }
    clear(){
        this.head = null
    }
    removeFirst(){
        this.head = this.head.next
    }
    removeLast(){
        if(!this.head){
            return
        }
        if(!this.head.next){
            this.head = null
            return
        }

        let node = this.head
        let lastNode = undefined

        while(node){
            if (!node.next){
                lastNode.next = null
            }
            lastNode = node
            node = node.next
        }
    }
    insertLast(data){
        if(!this.head){
            this.head = new Node(data)
            return
        }
        this.getLast().next = new Node(data)
    }
    getAt(index){
        if(index === 0){
            return this.head
        }
        let counter = 0
        let node = this.head
        while(node){
            if(counter === index){
                return node
            }
            counter++
            node = node.next
        }
        return null
    }
    removeAt(index){
        if(!this.head){
            return
        }
        if(index === 0){
            this.head = this.head.next
        }
        const previous = this.getAt(index-1)
        const node = this.getAt(index)
        if(!previous || !node){
            return
        }
        if(!node.next){
            previous.next = null
        } else {
            previous.next = node.next
        }
    }
    insertAt(data, index){
        if(!this.head){
            this.head = new Node(data)
            return
        }
        if(index === 0){
            this.head = new Node(data, this.head)
            return
        }
        const previous = this.getAt(index-1) || this.getLast()
        const node = new Node(data, previous.next)
        previous.next = node
    }
    forEach(fn){
        let counter = 0
        let node = this.head
        while(node){
            fn(node,counter)
            counter++
            node = node.next
        }
    }
    *[Symbol.iterator](){
        let node = this.head
        while(node){
            yield node
            node = node.next
        }
    }
}

module.exports = { Node, LinkedList };

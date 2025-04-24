type Node<T> = {
    value: T,
    next?: Node<T>,
}
export default class Queue<T> {

    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = {value: item} as Node<T>;
        this.length++;
        // is the queue empty?
        // if (this.length === 0)
        if (!this.tail) {
            this.tail = this.head = {value: item} as Node<T>;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    }
    deque(): T | undefined {
        // do we have a head?
        if (!this.head) {
            return undefined;
        }
        this.length--;

        const head = this.head;
        this.head = this.head.next;

        // free, technically not needed in a garbage collected language
        head.next = undefined;

        // tail??
        if (this.length === 0) {
            this.tail = undefined;
        }

        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
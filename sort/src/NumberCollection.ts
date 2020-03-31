import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  // publicを書くと下記がいらない
  // data: number[];
  constructor(public data: number[]) {
    super();
    // publicを書くと下記がいらない
    // this.data = data;
  }

  // getをつけると呼び出し時に()がいらない。
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}

const a = new NumbersCollection([1, 2, 3]);
a.length;

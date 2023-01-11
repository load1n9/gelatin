export class Node {
  #ptr: number;
  constructor(ptr: number) {
    this.#ptr = ptr;
  }

  get ptr() {
    return this.#ptr;
  }
}

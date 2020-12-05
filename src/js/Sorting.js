/**
 * @class Sorting
 * Игровое поле
 */
export default class Sorting {
  constructor() {
    this.board = null;
  }

  static sortUp(node, param) {
    return [...node].sort((a, b) => a[param] - b[param]);
  }

  static sortDown(node, param) {
    return [...node].sort((a, b) => a[param] + b[param]);
  }
}

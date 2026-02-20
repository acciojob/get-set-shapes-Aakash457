class Rectangle {
  constructor(width, height) {
    if (width <= 0 || height <= 0) {
      throw new Error("Width and height must be positive integers");
    }

    this._width = width;
    this._height = height;
  }

  // getters
  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  // area
  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    if (side <= 0) {
      throw new Error("Side must be a positive integer");
    }

    // call parent constructor
    super(side, side);
    this._side = side;
  }

  // perimeter only for square
  getPerimeter() {
    return this._side * 4;
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
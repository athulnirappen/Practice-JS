//Question: Create a Rectangle class with properties width and height. Add a method getArea that returns the area of the rectangle

class Rectangle{
    constructor(width, length) {
        this.width = width;
        this.length = length;
        
    }

    getArea() {
        let area = this.width * this.length
        return area
    }
}

const value = new Rectangle(9, 8)
console.log(value.getArea());
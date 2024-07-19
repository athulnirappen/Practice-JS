//Question: Create a base class Shape with a method getArea. Create two subclasses Circle and Square, each implementing the getArea method.



class Shape{
    getArea() {
        throw new Error("Method getArea() must be implemented.");
    }
}


class Circle extends Shape{
    constructor(radies) {
        super()
        this.radies=radies
    }

    getArea() {
        let area = Math.PI * this.radies * this.radies
        return area
    }
}

class Square extends Shape{
    constructor(side) {
        super()
        this.side=side
        
    }

    getArea() {
        return this.side*this.side
    }
}


const shapes = [new Square(4), new Circle(5)]
shapes.forEach((val) => {
    console.log(val.getArea());
})
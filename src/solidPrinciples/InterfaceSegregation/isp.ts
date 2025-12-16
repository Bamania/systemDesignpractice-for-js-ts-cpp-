// INTERFACE SEGREGATION PRINCIPLE
// main goal is Client should not be forced to execute the methods of abstract class
// imagine a shape class and shapes like 2d and 3d object ,lets just say 
// in 3d shape we add method volume,now to make it exist it should be in the abstract class as well,
// the moment we add it in the abstract class,all the childs,even the 2d shapes which doesnt have volumes we need to defien it for them
// we should avoid general purpose shape !

// WRONG: Fat interface forces 2D shapes to implement volume
interface Shape {
    calculateArea(): number;
    calculateVolume(): number;  // Problem: 2D shapes dont have volume
}

class Circle implements Shape {
    radius: number;
    
    constructor(radius: number) {
        this.radius = radius;
    }
    
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
    
    // Forced to implement even though circle has no volume
    calculateVolume(): number {
        throw new Error("Circle is 2D, no volume!");
    }
}

class Cube implements Shape {
    side: number;
    
    constructor(side: number) {
        this.side = side;
    }
    
    calculateArea(): number {
        return 6 * this.side * this.side;
    }
    
    calculateVolume(): number {
        return this.side * this.side * this.side;
    }
}

// Client breaks when using Circle because it assumes all shapes have volume
function processShape(shape: Shape) {
    console.log("Area:", shape.calculateArea());
    console.log("Volume:", shape.calculateVolume());  // Breaks for Circle
}

// CORRECT: Segregate interfaces, dont force unnecessary methods

interface TwoDimensionalShape {
    calculateArea(): number;
}

interface ThreeDimensionalShape extends TwoDimensionalShape {
    calculateVolume(): number;
}

class Circle2D implements TwoDimensionalShape {
    radius: number;
    
    constructor(radius: number) {
        this.radius = radius;
    }
    
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
    // No forced volume method, clean implementation
}

class Sphere implements ThreeDimensionalShape {
    radius: number;
    
    constructor(radius: number) {
        this.radius = radius;
    }
    
    calculateArea(): number {
        return 4 * Math.PI * this.radius * this.radius;
    }
    
    calculateVolume(): number {
        return (4/3) * Math.PI * Math.pow(this.radius, 3);
    }
}

// Clients use specific interfaces they need
function process2D(shape: TwoDimensionalShape) {
    console.log("Area:", shape.calculateArea());
}

function process3D(shape: ThreeDimensionalShape) {
    console.log("Area:", shape.calculateArea());
    console.log("Volume:", shape.calculateVolume());
}

const circle = new Circle2D(5);
const sphere = new Sphere(5);

process2D(circle);   // Works, only needs area
process3D(sphere);   // Works, has both area and volume

// Break large interfaces into smaller specific ones
// Clients should only depend on methods they actually use

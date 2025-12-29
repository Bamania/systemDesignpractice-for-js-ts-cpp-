// class shape {
//  readonly name:string
// sides:number
// sideLenght:number

// constructor(name:string,sides:number,sideLength:number){
//    this.name=name
//    this.sides=sides
//    this.sideLenght=sideLength
// }

//  calcPerimeter(){
//    console.log( this.sides*this.sideLenght)
//  }

// }
// class square extends shape{
//    constructor(sideLenght:number){
//       super("square",4,sideLenght)
//    }

//    calcArea(){
//       console.log(this.sides*this.sides);
//    }
// }

// const shape1=new shape("shape1",4,4);
// shape1.calcPerimeter(); 
class bus{
   make:string
   model:string
   year:number
   constructor(make:string,model:string,year:number){
      this.make=make;
      this.model=model;
      this.year=year;
   }

   start(){
      return "Car is started !"
   }
}
const b1=new bus("volvo","1978 B11R",2019);
// console.log(b1.start());

class SUV extends bus {
   offroad:boolean
 
   constructor(make:string,model:string,year:number,offroad:boolean){
      super(make,model,year);
      
      this.offroad=offroad
   }
   toggle(){
      console.log("toggling ",this.offroad ,"to",!this.offroad)
      return this.offroad=!this.offroad

   }
}

// const suv1=new SUV(false);
// const suv2=new SUV(false);
// suv1.toggle()
// suv1.toggle()
// suv2.toggle()

//4. Write a TypeScript class that defines a base class Car with properties like
//   make, model, and year, along with a start() method that prints a starting
//   message. Now create a class called Engine with the properties horsepower
//   and fuelType. Modify the Car class to include an instance of the Engine
//   class as a property. Implement a method printCarDetails() in the Car class
//   that prints both car and engine details. 

class Engine{
   horsepower:number
   fuelType:string
   constructor(horsepower:number,fueltype:string){
      this.fuelType=fueltype
      this.horsepower=horsepower
   }
}

// class Car extends Engine{
//    make:string
//    model:string
//    constructor(horsepower:number,fueltype:string,make:string,model:string){
//       super(horsepower,fueltype); //to set the engine details
//       this.make=make;
//       this.model=model;
//    }
//    start(){
//       console.log(`${this.model} has started`)
//       return "started"
//    }
//    printDetails(){
//       console.log(`${this.horsepower} , ${this.model} ${this.fuelType} `)
//    }  
// }
// const creta=new Car(500,"petrol","creta","2019");
// creta.printDetails();

// WE DIDNT HAVE TO EXTEND IT ,we can also have the class instance inside of the
// class like this

class car{
   make:string
   model:string
   //since we need the engine details 
   engine:Engine

   constructor(make:string,model:string,hp:number,fueltype:string){
      this.make=make;
      this.model=model;
      this.engine=new Engine(hp,fueltype);
   }
   start(){
      console.log(`${this.model} has started`)
      return "started"
   }
   printDetails(){
      console.log(`${this.engine.horsepower} , ${this.model} ${this.engine.fuelType} `)
   } 
}

// const creta=new car("make 1","2019",282,"diesel");
// creta.printDetails();


// QUESTION-> Write a TypeScript program that creates a class called Student with
//  properties name and roll number. Add constructor overloading to support
//  multiple ways of initializing a Student object. Implement one constructor
//  that takes both name and roll number as parameters and another constructor
//  that takes only name, assuming the roll number is unknown.

// Solution-> 
class Student{
   name:string
   rollNo:number | undefined;
   //since typescript doesnt allow the multiple constuctor 
   // constructor(name:String,rollNo:number){ 
   //    this.name=name;
   //    this.rollNo=rollNo
   static withRollNo(name:string,rollno:number){
      const s = new Student(name,rollno)
      
   }
   // }
   constructor(name:string,rollNo?:number){
      this.name=name;
      this.rollNo=rollNo
   }
   // adding public factory methods


}

// const s1=new Student("baman")
// console.log(s1.rollNo);
// console.log(s1.name);
// const s2=new Student("chaman",6)
// console.log(s2.name);
// console.log(s2.rollNo)

const arr=[[1,2],3,4,5,[5,6]];
const flatArr=arr.flat(Infinity);

// function flatten(arr){
// return arr.reduce((acc,val)=>{
//    return Array.isArray(val)?acc.concat(flatten(val)):acc.concat(val);
// },[]);
// }

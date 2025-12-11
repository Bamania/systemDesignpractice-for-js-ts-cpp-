class shape {
 readonly name:string
sides:number
sideLenght:number

constructor(name:string,sides:number,sideLength:number){
   this.name=name
   this.sides=sides
   this.sideLenght=sideLength
}

 calcPerimeter(){
   console.log( this.sides*this.sideLenght)
 }

}
class square extends shape{
   constructor(sideLenght:number){
      super("square",4,sideLenght)
   }

   calcArea(){
      console.log(this.sides*this.sides);
   }
}

const shape1=new shape("shape1",4,4);
shape1.calcPerimeter(); 
import { application } from "express"

// HIGH LEVEL  MODULE SHOULD TALK TO THE LOW MODULE WITH AN INTERFACE !
abstract class persistance{
    abstract save():void
}

class mongoDb extends persistance {
    save(){
        console.log("Saving to mongoDb")
        return "Saved To Mongo Db"
    }
}

class sqlDb extends persistance{
    save(){
        console.log("Saving to SqlDb")
        return "saved"
    }
}

class Application{

service:persistance  //which db service to use
constructor(className:persistance){
    this.service=className
    
}

save(){
    this.service.save()
}


}
const webApp=new Application(new mongoDb)
webApp.save()
const androidApp = new Application(new sqlDb)
androidApp.save()

// 1-chilka
// 2-place to cut the vegetables !
// 3-place to put the new vegetables !
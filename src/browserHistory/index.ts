class browserHistory{
    homepage:string
    currentUrl:string
    forward:string[]
    backward:string[]
    constructor(homepage:string){
        this.homepage=homepage
        this.currentUrl=homepage
        this.forward=[]
        this.backward=[]
    }

    // newUrl
    visit(newUrl:string){
    this.backward.push(this.currentUrl)
    this.currentUrl=newUrl
        return this.currentUrl
    }


    // to go forwards !
    next(){
        // poin the current to the forward last ! and pop it
        this.backward.push(this.currentUrl)
        if(this.forward.length < 1) return 
        this.currentUrl=this.forward.pop()!
            return this.currentUrl

    }
    // to go backwards
    prev(){
        // push the current to the forward
        // point current to the backward last
        // pop the backward last !
        this.forward.push(this.currentUrl)

        if(this.backward.length < 1) return "home"
        this.currentUrl=this.backward.pop()! 
        return this.currentUrl  
    }
}

const browser=new browserHistory("home")
console.log(browser.visit("youtube"))
console.log(browser.visit("instagram"))
console.log(browser.prev())
console.log(browser.next())
console.log(browser.prev())
console.log(browser.next())
console.log(browser.next())
console.log(browser.prev())

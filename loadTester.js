// load tester in this script we will basically make multiple child process and hit our node server !

var util=require("util")
var childProc=require("child_process")



var MAX_CHILDREN=1000
main().catch(console.error)
async function main(){
    process.stdout.write(`spawning ${MAX_CHILDREN} child process `)
    let childrens=[]//we will collect all the child process object here

    for(let i=0;i<MAX_CHILDREN;i++){
        var child=childProc.spawn("node",["./loadTester_child1.js"])
        childrens.push(child)
    }

    let resps=childrens.map(function(childObj){
        return new Promise((res,rej)=>{
            childObj.on("exit",(code)=>{
                // console.log("\nprinting the child code",code)
                if(code==0) res(true) //resolve the promise only if the process code exits with 0
                else res(false)
            })
        })
    })

    resps=await Promise.all(resps) //this will end up an array of like [true,true,false ...] according to the promise result 
    var resolved=resps.filter(function (item){
        return item==true
    })
    if(resolved.length==MAX_CHILDREN){
        console.log("sucess")
    }else {
        console.log("failure!")
    }

}






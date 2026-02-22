#!/usr/bin/env node
var path=require("path")
var fs=require("fs")
var args=require('minimist')(process.argv.splice(2),{
    boolean:["help"],
    string:["file"] //with this configuration we made sure if in our
//  args if we have file,the value will be treated as string,
// for help,the value will be treated as boolean !
})
// console.log(args)

if(args.help){
    printHelp()
}else if(args.file){
    const filePath=path.resolve(args.file)
    processFile(filePath)
    console.log(filePath)

}else {
    error("Incorrect Usage",true)
}


function processFile(filePath){
    var contents=fs.readFileSync(filePath)
    // console.log(contents)  YOU  MUST KNOW WHY IT PRINTS BUFFER ETC WHEN WE READ A CONTENT FROM THE TXT FILE 
    process.stdout.write(contents)  //YOU MUST KNOW WHY USING THIS DIRECTLY PRINTS THE STRING AND NOT SOMETHING LIKE < BUFFER 12 2C ..
} 
function error(msg,includeHelp=false){
    console.error(msg)
    if(includeHelp){
        console.log(" ")
        printHelp()
    }
}
function printHelp(){
    // console.log("-- help        Print this for help")
    console.log("--file={FILENAME}   process the file")
}
#!/usr/bin/env node
var path=require("path")
//var getStdin = require'get-stdin').default;
var util=require("util")
var zlib=require("zlib")
var Transform=require("stream").Transform
// everything that is not part of the startup should be asynchronous !
var fs=require("fs")
var args=require('minimist')(process.argv.splice(2),{
    boolean:["help","in","out","compress","uncompress"],
    string:["file"] //with this configuration we made sure if in our
//  args if we have file,the value will be treated as string,
// for help,the value will be treated as boolean !
})
console.log(args)
var BASE_PATH=process.env.BASE_PATH || __dirname
var OUTPUT=path.join(BASE_PATH,"output.txt")
if(args.help){

  printHelp()
  
} else if(args.in || args._.includes("-")) {
  
  processFile(process.stdin)

} else if(args.file) {

  let stream=fs.createReadStream(path.resolve(BASE_PATH,args.file))  
  processFile(stream) 

} else {
    error("Incorrect Usage",true)
}


function processFile(inStream){
      //now since the inStream is a readable  stream we just wish to pipe it out to a writable stream so first we need a writabel stream which
  // we can make using the process.stdout
  var outStream=inStream //copying the stream so that we could use it again and again !
    
  if(args.uncompress){
    let gunzipstream=zlib.createGunzip()
    outStream=outStream.pipe(gunzipstream)
  }
  //upper stream is going to be a writable
  var upperStream=new Transform({
    transform(chunk,enc,cb){
      this.push(chunk.toString().toUpperCase())
      cb()
      }
  })
 outStream=outStream.pipe(upperStream)

  let targetStream
  if(args.out){
    targetStream=process.stdout
  }else if (args.compress) {
    let gzipstream=zlib.createGzip()
      
    outStream=outStream.pipe(gzipstream)
    OUTPUT=`${OUTPUT}.gz`
    targetStream=fs.createWriteStream(OUTPUT) 
      
  }
  else {
    targetStream=fs.createWriteStream(OUTPUT)
  }
      
  outStream.pipe(targetStream)
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
    console.log("--on                process in stdout")
    console.log("--compress          process the output in gzip")
}

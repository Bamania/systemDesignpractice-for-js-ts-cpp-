// PUB-SUB MODEL EXPLANATION:
// What we store: events object stores EVENT NAMES as keys and ARRAYS OF CALLBACK FUNCTIONS as values
// 
// Structure of this.events:
// {
//   "userLogin": [function1, function2, function3],
//   "orderPlaced": [function4, function5],
//   "paymentReceived": [function6]
// }

class pubSub{
    events:any
    constructor(){
        this.events={}  // Empty object to store event name -> callback array mapping
    }
    
    // PUBLISHER: Triggers an event and sends data to all subscribers
    publisher(eventName:string,data:any){
        if(!this.events[eventName]) return  // No one subscribed to this event
        
        // Call each callback function with the data
        this.events[eventName].forEach((cb:any)=>{
            cb(data)
        })
    }

    // SUBSCRIBER: Register a callback to listen for an event
    subscriber(eventName:any,cb:any){
        if(!this.events[eventName]){
            this.events[eventName]=[]  // Create new array for this event
        }
        this.events[eventName].push(cb)  // Add callback to the array
        
        // Return unsubscribe function
        return ()=>{
            this.events[eventName]=this.events[eventName].filter((i:any) => i!==cb)
        }
    }
}

// EXAMPLE: E-commerce system

const eventBus = new pubSub()

// STEP 1: Different parts of the app subscribe to events

// Analytics team wants to track user logins
const unsubscribeAnalytics = eventBus.subscriber("userLogin", (data:any) => {
    console.log("Analytics: User logged in ->", data.username, "at", data.time)
})

// Email service wants to send welcome email on login
eventBus.subscriber("userLogin", (data:any) => {
    console.log("Email Service: Sending welcome email to", data.email)
})

// Notification service wants to show notification
eventBus.subscriber("userLogin", (data:any) => {
    console.log("Notification: Welcome back,", data.username)
})

// Warehouse subscribes to order events
eventBus.subscriber("orderPlaced", (data:any) => {
    console.log("Warehouse: Preparing order", data.orderId, "with", data.items.length, "items")
})

// Payment service subscribes to order events
eventBus.subscriber("orderPlaced", (data:any) => {
    console.log("Payment: Processing payment of $", data.totalAmount)
})

console.log("\n--- What's stored in events object right now ---")
console.log("Event names:", Object.keys(eventBus.events))
console.log("userLogin has", eventBus.events["userLogin"].length, "subscribers")
console.log("orderPlaced has", eventBus.events["orderPlaced"].length, "subscribers")

// STEP 2: Publisher triggers events

console.log("\n--- User logs in ---")
eventBus.publisher("userLogin", {
    username: "john_doe",
    email: "john@example.com",
    time: new Date().toISOString()
})

console.log("\n--- Order is placed ---")
eventBus.publisher("orderPlaced", {
    orderId: "ORD123",
    items: ["Laptop", "Mouse", "Keyboard"],
    totalAmount: 1500
})

// STEP 3: Unsubscribe example

console.log("\n--- Analytics unsubscribes ---")
unsubscribeAnalytics()
console.log("userLogin now has", eventBus.events["userLogin"].length, "subscribers")

console.log("\n--- Another user logs in (Analytics won't see this) ---")
eventBus.publisher("userLogin", {
    username: "jane_smith",
    email: "jane@example.com",
    time: new Date().toISOString()
})

// KEY POINTS:
// 1. We store: EVENT NAME -> ARRAY OF CALLBACK FUNCTIONS
// 2. Subscriber adds callback to array
// 3. Publisher loops through array and calls each callback
// 4. Unsubscribe removes callback from array
function debounce(fn:Function,delay:number){
    let timerId :any;
 return function(args:any){
    clearTimeout(timerId)
    timerId=setTimeout(()=>{
        fn(...args)
    },delay)

 }
}

// function throttle(fn,delay){
//     let lastcall=0;
//     return (...args)=>{
//         const now=Date.now();
//         if(now-lastcall< delay){
//             return
//         }
//         lastcall=now;
//         return fn(...args)
//     }
// }


function throttle(fn:any,delay:any){
    let lastCall=0;
    return function(){
        const now=Date.now()
        if(now-lastCall<delay){
            return 
        }
        lastCall=now
        return fn()
    }
}
function outer(){
    let counter=0;
    return function(){
        counter++;
        console.log("counter",counter)
    }
}

// const f1=outer();
// const f2=outer()
// // f1()
// // f1()
// // f2()
// // f2()
 function random(x:number){
    return new Promise((resolve, reject) => {
            if(x>5) resolve("solved") 
                else reject("reject")
    })
}

random(6).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})

function flatten(arr: any[]): any[] {
    return arr.reduce((acc: any[], val: any) => {
        if (Array.isArray(val)) {
            return acc.concat(flatten(val))
        } else {
            return acc.concat(val)
        }
    }, [])
}
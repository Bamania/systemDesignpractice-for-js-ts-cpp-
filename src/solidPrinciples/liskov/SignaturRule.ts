
// QUESTION->TO PERSIST LISKOV SOLID PRINCIPLE IT IS OFTEN SAID TO FOLLOW THE 
// THREE PRINCPLES OR RULE:
// 1-SIGNATURE RULE
// 2-PROPERTY RULE
// 3-METHOD RULE

class Parent{
    pParameterone:string
    pParametertwo:boolean
    pParameterthree:number

    constructor(p1:string,p2:boolean,p3:number){
        this.pParameterone=p1;
        this.pParametertwo=p2;
        this.pParameterthree=p3
    }

    m1(addString:string){
        this.pParameterone=this.pParameterone +`${addString}`;
        return this.pParameterone
    }
}

const obj1=new Parent("test",false,55);
console.log(obj1.pParameterone)
obj1.m1("I see you")
console.log(obj1.pParameterone)

// now if you want to make a Child class to make sure that it follows the
// signature rule, make the args and everything very same

class TestChild extends Parent{
    constructor(testString:string,testBool:boolean,testNumber:number){
        super(testString,testBool,testNumber);
    }
    //overriding ,make sure you do with the same type order count, so that  signature rule follows 
    // m1(){ <-------- WRONG
    //     console.log("inside the childs same method !")
    //     return "this is not correct "
    // }

    m1(addString: string): string { // <-------- RIGHT
        console.log("inside the child's same method!")
        this.pParameterone = this.pParameterone + addString;
        return this.pParameterone;  // Same behavior as parent ,or make it return the narrowed down!
    }
}

const testChild=new TestChild("bamanChild",false,342)

// NOTICE THE CLIENT EXPECTS A PARENT CLASS IN THE CONSTRUCTOR 
class Client{
    private p: Parent;

    constructor(p: Parent) {
        this.p = p;
    }

    printMsg() {
        this.p.m1("Hello");
    }
}
const parentClass=new Parent("testParent",false,0);
const childClass=new TestChild("testChild",true,1)
//liskov substitution is followed here becasue see we could pass the parent
//class or the child class to a same client 
const client=new Client(parentClass); //<-- Parent class
const client2=new Client(childClass);//<-- child class

// ============================================================================
// EXCEPTION RULE:
// A subclass should throw fewer or narrower exceptions (or the same)
// but NOT additional or broader exceptions than the parent.
// TypeScript/JavaScript doesn't enforce this at compile time.
// ============================================================================

class Account {
    balance: number;
    
    constructor(balance: number) {
        this.balance = balance;
    }
    
    // Parent throws a specific error type
    withdraw(amount: number): void {
        if (amount > this.balance) {
            throw new Error("Insufficient funds"); // Specific error
        }
        this.balance -= amount;
    }
}

// CORRECT: Child throws same or narrower exception
class SavingsAccount extends Account {
    withdraw(amount: number): void {
        if (amount > this.balance) {
            throw new Error("Insufficient funds in savings"); // Same/narrower
        }
        this.balance -= amount;
    }
}

// WRONG: Child throws broader/different exception
class CheckingAccount extends Account {
    withdraw(amount: number): void {
        if (amount > this.balance) {
            // throw new TypeError("Type mismatch!"); // Different exception type!
            throw ("INSUFFICIENT FUNDS IN checking acc"); // Different exception type!
        }
        // Client expects Error, not TypeError - breaks LSP
        this.balance -= amount;
    }
}

// Client expects to catch Error from Account.withdraw()
function processWithdrawal(account: Account, amount: number) {
    try {
        account.withdraw(amount);
        console.log("Withdrawal successful");
    } catch (e) {
        if (e instanceof Error) {
            console.log("Handled error:", e.message);
        } else {
            console.log("Unexpected error type!"); // CheckingAccount breaks this
        }
    }
}

const savings = new SavingsAccount(100);
const checking = new CheckingAccount(100);

processWithdrawal(savings, 150);   //  Works as expected
processWithdrawal(checking, 500);  // Throws unexpected TypeError->YOU MUST KNOW THE WHY OF THIS !
// HINT-GO TO LINE 108 AND 109
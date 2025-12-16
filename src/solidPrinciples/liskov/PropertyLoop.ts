// PROPERTY loop has two more rules 
// 1->class Invarient ->if parnet class follows some rule,than the
// child class should also follow the same rule ! 
class Account{
    balance:number
    constructor(acc:number){
        this.balance=acc;
    }
    withdraw(x:number):number{
        if(x>this.balance){   //i expect this method to follow this rule !,child should also follow this rule !
            throw Error("aukat mai")
        }
        this.balance-=x;
        console.log(`Current Balance ${this.balance}`)
        return x;
    }
        
}

class CheatChild extends Account{
    withdraw(x: number): number {
        this.balance-=x;
        console.log('This method wont check the rule so you can withdraw any number of amt from your bank')
        return x;
    }
}






// HISTORY CONSTRANT-parent class has some constraint or state,then the child
// class should respect this constraint 

class fixedDeposit extends Account {
    withdraw(x: number): number {
        throw new Error("fixed Deposit doesnt have withdraw fx !")
        return 0
    }
}
// now this above function breaks the main rule,acc function had this state that
// the withdraw should always have a withdraw fucntion but the child class
// fixedDeposit wont be having a withdraw fucntio right so we are violating the
// HISTORY CONSTRAINT rule and hence we must do something and change the class
// designs 
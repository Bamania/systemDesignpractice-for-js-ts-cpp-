// THis pattern mainly helps us to seperate out the business logic from the
// object creation logic

// 1-SIMPLE FACTORY
abstract class Burger {
  prepare(): void {}
}
class BasicBurger extends Burger {
  prepare(): void {
    console.log("preparing the basic burger !");
  }
}
class StandardBurger extends Burger {
  prepare(): void {
    console.log("preparing the standard burger !");
  }
}
class PremiumBurger extends Burger {
  prepare(): void {
    console.log("preparing the Premium burger !");
  }
}

// now make a simple factory which will return the burger object accordingly
class burgerFactory {
  // private burgerType:string
  public CreateBurger(burgerType: string):Burger {
    // this.burgerType=burgerType
    if (burgerType == "standard") return new StandardBurger();
    else if (burgerType == "premium") return new PremiumBurger();
    else {
      return new BasicBurger();
    }
  }
}


// const BurgerFactory=new burgerFactory()
// basic.prepare()
const factory=new burgerFactory()
const basic=factory.CreateBurger("basic")
basic.prepare()
const standard=factory.CreateBurger("standard")
standard.prepare()
const premium=factory.CreateBurger("premium")
premium.prepare()

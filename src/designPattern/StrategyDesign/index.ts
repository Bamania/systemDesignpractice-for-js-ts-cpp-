// this pattern allows us to realize why composition is better than inheritance
// if you inherit a mother class ,if the child class adds up a new functionality
// ,it will require us to modify the inheritace heirarchy! So to save our ass from such 
// repetative modification we can use this design pattern !

// ================================================================================
//  CHALLENGE: E-Commerce Payment System
// ================================================================================
//
// You are building a payment system for an e-commerce platform.
// The system needs to support multiple payment methods:
//   1. Credit Card - charges a 2% processing fee
//   2. PayPal - charges a flat $1.50 fee per transaction
//   3. Crypto (Bitcoin) - gives a 5% discount but rounds to nearest dollar
//   4. Bank Transfer - no fee, but takes 3-5 business days (just log this info)
// Requirements:
// - Create a PaymentStrategy interface with a method: pay(amount: number): void
// - Implement 4 concrete strategies (one for each payment method)
// - Create a ShoppingCart class that:
//     • Holds a list of item prices
//     • Can switch payment strategies at runtime
//     • Has a checkout() method that calculates total and processes payment
//
// Example Usage:
//   const cart = new ShoppingCart();
//   cart.addItem(100);
//   cart.addItem(50);
//   
//   cart.setPaymentStrategy(new CreditCardPayment("1234-5678-9012-3456"));
//   cart.checkout(); // Output: "Paying $153.00 using Credit Card ending in 3456 (includes $3.00 fee)"
//   
//   cart.setPaymentStrategy(new PayPalPayment("user@email.com"));
//   cart.checkout(); // Output: "Paying $151.50 via PayPal account user@email.com"
//
// BONUS: Add a CouponDecorator that can wrap any payment strategy and apply a discount!
//
// Think about:
//   - How would you add a new payment method (e.g., Apple Pay) without modifying existing code?
//   - What if the fee calculation logic changes for one payment method?
//
// ================================================================================
// STRATEGY PATTERN SOLUTION:
// ================================================================================

// STEP 1: Define ONE interface that ALL payment methods must follow
// This is the "contract" - every payment strategy must have a pay() method
interface PaymentStrategy {
    pay(amount: number): void;
}

// STEP 2: Create concrete strategies - each IMPLEMENTS the interface
// Each one has its OWN logic for calculating fees

class CreditCardPayment implements PaymentStrategy {
    private cardNumber: string;

    constructor(cardNumber: string) {
        this.cardNumber = cardNumber;
    }

    pay(amount: number): void {
        const fee = amount * 0.02; // 2% fee
        const total = amount + fee;
        const lastFour = this.cardNumber.slice(-4);
        console.log(`Paying $${total.toFixed(2)} using Credit Card ending in ${lastFour} (includes $${fee.toFixed(2)} fee)`);
    }
}

class PayPalPayment implements PaymentStrategy {
    private email: string;

    constructor(email: string) {
        this.email = email;
    }

    pay(amount: number): void {
        const fee = 1.50; // flat $1.50 fee
        const total = amount + fee;
        console.log(`Paying $${total.toFixed(2)} via PayPal account ${this.email}`);
    }
}

class CryptoPayment implements PaymentStrategy {
    private walletAddress: string;

    constructor(walletAddress: string) {
        this.walletAddress = walletAddress;
    }

    pay(amount: number): void {
        const discount = amount * 0.05; // 5% discount
        const total = Math.round(amount - discount); // round to nearest dollar
        console.log(`Paying $${total} in Bitcoin to wallet ${this.walletAddress.slice(0, 8)}... (saved $${discount.toFixed(2)})`);
    }
}

class BankTransferPayment implements PaymentStrategy {
    private accountNumber: string;

    constructor(accountNumber: string) {
        this.accountNumber = accountNumber;
    }

    pay(amount: number): void {
        console.log(`Paying $${amount.toFixed(2)} via Bank Transfer to account ${this.accountNumber}`);
        console.log(`⚠️ Note: Bank transfers take 3-5 business days to process`);
    }
}

// STEP 3: The ShoppingCart only knows about PaymentStrategy interface
// It doesn't care WHICH payment method - they all have pay()!
class ShoppingCart {
    private items: number[] = [];
    private paymentStrategy: PaymentStrategy | null = null;

    addItem(price: number): void {
        this.items.push(price);
        console.log(`Added item: $${price}`);
    }

    // Notice: accepts PaymentStrategy, not specific types!
    setPaymentStrategy(strategy: PaymentStrategy): void {
        this.paymentStrategy = strategy;
    }

    checkout(): void {
        if (!this.paymentStrategy) {
            console.log("❌ Please select a payment method first!");
            return;
        }
        const total = this.items.reduce((sum, item) => sum + item, 0);
        console.log(`\n🛒 Cart total: $${total}`);
        this.paymentStrategy.pay(total);
    }
}

// ================================================================================
// TEST IT OUT:
// ================================================================================

const cart = new ShoppingCart();
cart.addItem(100);
cart.addItem(50);

console.log("\n--- Paying with Credit Card ---");
cart.setPaymentStrategy(new CreditCardPayment("1234-5678-9012-3456"));
cart.checkout();

console.log("\n--- Switching to PayPal ---");
cart.setPaymentStrategy(new PayPalPayment("user@email.com"));
cart.checkout();

console.log("\n--- Switching to Crypto ---");
cart.setPaymentStrategy(new CryptoPayment("0xABC123DEF456"));
cart.checkout();

console.log("\n--- Switching to Bank Transfer ---");
cart.setPaymentStrategy(new BankTransferPayment("****5678"));
cart.checkout();

// ================================================================================
// 🎯 THE MAGIC: Adding Apple Pay requires ZERO changes to ShoppingCart!
// ================================================================================

class ApplePayPayment implements PaymentStrategy {
    private deviceId: string;
    
    constructor(deviceId: string) {
        this.deviceId = deviceId;
    }
    
    pay(amount: number): void {
        console.log(`Paying $${amount.toFixed(2)} with Apple Pay (Device: ${this.deviceId})`);
    }
}

console.log("\n--- Now with Apple Pay (added without modifying ShoppingCart!) ---");
cart.setPaymentStrategy(new ApplePayPayment("iPhone-15-Pro"));
cart.checkout();
    

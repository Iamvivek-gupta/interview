It looks like this is the classic **count the number of ways to score runs using only 1 and 2**, **but you cannot use two 2’s consecutively**.

And you want the number of ways for a target score (example: 3).

I’ll give you:

1️⃣ **Explanation (very short)**
2️⃣ **Simple JavaScript code**

---

# ✅ **Problem Understanding**

Allowed runs per move: **1 or 2**
Restriction: ❌ **No two 2’s back-to-back**

Example for score = **3**:

All valid sequences:

* 1 + 1 + 1
* 1 + 2
* 2 + 1

Invalid:

* 2 + 2 (not allowed, also sum ≠ 3)

Total ways = **3**

---

# ✅ **JavaScript solution (simple recursion + memo)**

```js
function countWays(score, last = 0, memo = {}) {
    const key = score + "-" + last;
    if (memo[key] !== undefined) return memo[key];

    if (score === 0) return 1;       // one valid way
    if (score < 0) return 0;         // invalid

    let ways = 0;

    // Option 1: add 1 (always allowed)
    ways += countWays(score - 1, 1, memo);

    // Option 2: add 2 (allowed only if last was NOT 2)
    if (last !== 2) {
        ways += countWays(score - 2, 2, memo);
    }

    memo[key] = ways;
    return ways;
}

// Example:
console.log(countWays(3));  // Output: 3
```

---

# ✅ **How it works**

* We track `last` to avoid using **2 after 2**
* We count all valid sequences that sum to target
* Memoization makes it fast

---

# ⭐ Output for sample inputs:

| Score | Ways                      |
| ----- | ------------------------- |
| 1     | 1                         |
| 2     | 2 → (1+1, 2)              |
| 3     | 3 → (1+1+1, 1+2, 2+1)     |
| 4     | 4 → (1111, 112, 121, 211) |

---

If you want, I can also provide:
✅ bottom-up DP version
✅ iterative version (no recursion)
Just tell me!







Sure! Below is **simple JavaScript code that prints ALL valid combinations** plus the **total count**.

### ✅ Rules

✔ Can use **1** and **2**
❌ Cannot use **two 2’s consecutively**
✔ Print **all combinations**
✔ Works for any score (ex: 3, 4, 5…)

---

# ✅ **JavaScript Code — Print All Valid Combinations**

```js
function findWays(score, last = 0, current = [], result = []) {
    if (score === 0) {
        result.push([...current]);
        return result;
    }
    if (score < 0) return result;

    // Option 1: Use 1 (always allowed)
    current.push(1);
    findWays(score - 1, 1, current, result);
    current.pop();

    // Option 2: Use 2 (only if last move was NOT 2)
    if (last !== 2) {
        current.push(2);
        findWays(score - 2, 2, current, result);
        current.pop();
    }

    return result;
}

// Example: all ways to score 3
let ways = findWays(3);
console.log("Combinations:", ways);
console.log("Total ways:", ways.length);
```

---

# ✅ **Output for score = 3**

```
Combinations: [
  [1,1,1],
  [1,2],
  [2,1]
]
Total ways: 3
```

---

# ⭐ Try another score (example: 4)

```js
console.log(findWays(4));
```

Output:

```
[
  [1,1,1,1],
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
Total ways: 4
```

---

# Want even shorter version? Or want to generate for 10, 20, or more?

I can also return:
✅ results as strings (“1-1-2”)
✅ count only
✅ print steps visually

Just tell me!










Here is a **very easy explanation** of a **payment system design** (like Razorpay, Stripe, Paytm, etc.).
No complex terms — just simple understanding.

---

# ⭐ **What is a Payment System?**

A payment system lets a customer **pay money** to a business using:

* Card
* UPI
* Net Banking
* Wallet
* EMI etc.

---

# ⭐ **Simple Architecture (in 5 steps)**

## **1️⃣ Customer places an order**

User clicks **Pay Now**.

Your frontend sends:

* orderId
* amount
* customer info

to backend.

---

## **2️⃣ Backend creates a Payment Request**

Backend calls Payment Gateway API:

```
POST /create-payment
```

Gateway returns:

* paymentId
* paymentLink OR paymentToken

---

## **3️⃣ Customer completes payment on Gateway**

User is redirected to **payment gateway page** (secure).

User enters:

* card number
* UPI ID
* OTP

Gateway handles all sensitive data (your system never sees card details).

---

## **4️⃣ Gateway updates your backend (Webhook)**

Once payment succeeds/fails, the gateway sends a **webhook**:

```
POST /payment/webhook
{
  paymentId,
  status: "SUCCESS",
  amount
}
```

Your backend updates the order:

```
order.status = "Paid"
```

This is **the most important part**.

---

## **5️⃣ Backend confirms & frontend shows success**

Your backend returns the updated payment status to the frontend.

User sees:

**Payment Successful ✔**

---

# ⭐ **Simple Architecture Diagram (Text Version)**

```
User → Frontend → Backend → Payment Gateway → Bank
                                ↓
                           Webhook to Backend
                                ↓
                              Order success
```

---

# ⭐ **Key Components Explained Simply**

### **🔹 Payment Gateway**

A company that handles real money transactions:

* Razorpay, Stripe, Paytm, CC Avenue, Cashfree…

### **🔹 Order Service**

Stores:

* orderId
* amount
* customerId
* payment status

### **🔹 Payment Service**

Handles:

* Create payment session
* Verify payments
* Handle gateway webhooks

### **🔹 Webhook**

Gateway telling you:

* Payment successful
* Payment failed
* Payment refunded

---

# ⭐ What Your System Must Ensure

### ✔ **Idempotency**

Avoid double-charging:

* Each payment is updated once even if webhook comes twice.

### ✔ **Security**

Use:

* HTTPS
* Signature verification for webhook
* Do NOT store card details.

### ✔ **Retry Logic**

If gateway fails, user can retry safely.

### ✔ **Transaction Logs**

Every step recorded for audit.

---

# ⭐ Very Simple Example API Flow

### **Frontend**

```
POST /api/create-order
```

### **Backend**

```
orderId = saveOrder(amount)
paymentToken = gateway.createPayment(orderId)
return paymentToken
```

### **User Pays**

### **Gateway → Webhook**

```
POST /payment/webhook
{
  paymentId,
  orderId,
  status: "SUCCESS"
}
```

### **Backend**

```
update order.status = "Paid"
```

---

# ⭐ Done! You now understand Payment System Design in the simplest way.

If you want, I can also explain:

* Refund system
* Settlement system (money to merchant)
* Fraud detection
* UPI AutoPay
* Subscription payments

Just tell me!

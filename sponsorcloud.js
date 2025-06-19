// lean, exex, populate, data modeling in mongodb, aggregation, and more
// A singleton pattern ensures that a class has only one instance and provides a global access point to it.

// Here’s a simple and easy-to-understand JavaScript example:


// ---

// ✅ Singleton Class Pattern in JavaScript:

// class Singleton {
//   constructor() {
//     if (Singleton.instance) {
//       return Singleton.instance;
//     }

//     this.data = "I am the only instance";
//     Singleton.instance = this;

//     return this;
//   }

//   getData() {
//     return this.data;
//   }

//   setData(newData) {
//     this.data = newData;
//   }
// }


// ---

// ✅ Usage:

// const a = new Singleton();
// const b = new Singleton();

// a.setData("Hello Singleton");

// console.log(a.getData()); // Hello Singleton
// console.log(b.getData()); // Hello Singleton

// console.log(a === b); // true


// ---

// 🧠 Key Idea:

// The Singleton.instance holds the one and only instance.

// If you try to create a new object, it just returns the existing one.


// Let me know if you want the same in ES5 or using closures/functions.

// ==> prototype inheritance
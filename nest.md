# NestJS
- NestJS is built on top of ExpressJS but adds structure, scalability, and TypeScript support out of the box. 
- It follows SOLID principles and uses decorators, modules, and dependency injection to make code more maintainable and testable. 
- Express is great for small apps, but NestJS shines in enterprise-grade applications.






Here are short, clean, and easy NestJS interview questions with concise answers and simple examples.## What is NestJS?
A progressive Node.js framework for building efficient and scalable server-side applications using TypeScript and modular architecture.## Explain Dependency Injection in NestJS
It's a design pattern where classes (dependencies) are provided to other classes, helping modularity and testability. 
**Example:**
```typescript
@Injectable()
class CatsService {}

@Controller('cats')
class CatsController {
  constructor(private readonly catsService: CatsService) {}
}
```
CatsService is injected into CatsController by NestJS DI system.[10][11]## What are Modules?
A module groups related components (controllers, providers) together. It's defined using the `@Module()` decorator.
**Example:**
```typescript
@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
```
## What are Controllers?
Controllers handle incoming requests and return responses. They use decorators like `@Controller()` and routing methods (e.g., `@Get()`).
**Example:**
```typescript
@Controller('cats')
export class CatsController {
  @Get()
  findAll() {
    return 'All cats';
  }
}
```
## What are Services?
Services contain business logic and data access, typically injected into controllers.
**Example:**
```typescript
@Injectable()
export class CatsService {
  getCats() { return ['Tom', 'Jerry']; }
}
```
## What are Guards?
- Guards provide route protection and authorization logic. Implemented with the `CanActivate` interface and used via `@UseGuards()`.

## What are Pipes?
- Pipes transform or validate input data before it reaches the handler.

## How is Middleware used?
- Middleware functions execute before the request reaches the route handler, useful for tasks like logging or authentication.




Dependency injection (DI) in NestJS is a technique where the framework automatically provides required class instances (dependencies) to your components (like controllers and services), promoting loose coupling and clean code.[1][2][5]

## Key Points
- Services and classes you want to inject are marked with `@Injectable()`.
- NestJS manages their lifecycle and injects them via the constructor.
- This avoids manual instantiation, making code modular and easy to test.

## Simple Example
```typescript
// hello.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  getHello(): string {
    return 'Hello, World!';
  }
}

// hello.controller.ts
import { Controller, Get } from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  getHello(): string {
    return this.helloService.getHello();
  }
}
```
- Here, `HelloService` is injected into `HelloController` and used directly without manual instantiation.[1]

NestJS's DI makes your application organized and maintainable by handling dependencies transparently.






# Why DI is Singleton in NestJS

Great 👍 Since you are already a **NodeJS / NestJS developer**, let’s understand **Dependency Injection (DI)** in the most practical way — not theory language 😄

---

# 🧠 First Understand The Problem (Without DI)

Suppose you are building a **User Service** which needs a **Database Service**

### ❌ Without DI (Normal JavaScript Way)

```ts
class DatabaseService {
  connect() {
    console.log("DB Connected");
  }
}

class UserService {
  private db = new DatabaseService();  // 👈 tightly coupled

  getUsers() {
    this.db.connect();
    console.log("Fetching users...");
  }
}
```

### 🚨 Problem Here:

* UserService itself is creating DatabaseService
* If tomorrow you change DB (Mongo → MySQL)
* You must change UserService code ❌

👉 This is called **Tightly Coupled Code**

---

# 💉 Now Enter Dependency Injection (DI)

Instead of creating the dependency inside the class...

👉 **Someone else will give it to you**

---

### ✅ With DI (NestJS Way)

```ts
@Injectable()
export class DatabaseService {
  connect() {
    console.log("DB Connected");
  }
}
```

Now inject it 👇

```ts
@Injectable()
export class UserService {
  constructor(private db: DatabaseService) {} // 👈 Injected

  getUsers() {
    this.db.connect();
    console.log("Fetching users...");
  }
}
```

---

## 🧠 In Simple Words

NestJS says:

> "Don't create things yourself, I will create them for you and give you whenever needed."

This is Dependency Injection 💉

---

# 🏭 Who Creates the Object Then?

NestJS has a **DI Container**

Think of it like:

```
Amazon Warehouse 📦
```

Whenever your class needs something:

```
constructor(private db: DatabaseService)
```

NestJS checks:

👉 "Do I already have DatabaseService?"

* If YES → give existing one
* If NO → create and store it

---

# 🔥 This Is Why DI Is Famous

| Without DI              | With DI             |
| ----------------------- | ------------------- |
| Tightly coupled         | Loosely coupled     |
| Hard to test            | Easy to test        |
| Hard to maintain        | Easy to maintain    |
| Manual object creation  | Automatic           |
| Code changes everywhere | Change in one place |

---

# 🎯 Now The Most Important Part

# 👉 Why DI in NestJS is Singleton?

---

## By Default NestJS Providers Are:

```
SINGLETON 🟢
```

Meaning:

> Only **one instance** of that class is created in the entire app.

---

### Example

Suppose:

```ts
@Injectable()
export class LoggerService {
  constructor() {
    console.log("Logger Created");
  }
}
```

Inject it in:

* UserService
* OrderService
* ProductService

```ts
constructor(private logger: LoggerService)
```

---

### Output Will Be:

```
Logger Created
```

Only **ONCE**

Even if 100 services use it.

Because NestJS:

```
Creates once ➜ Stores in DI Container ➜ Reuses everywhere
```

---

# 📦 Visual Flow

```
App Starts 🚀

NestJS Container:
    LoggerService  ✅ Created once

UserService asks → give LoggerService
OrderService asks → give same LoggerService
ProductService asks → give same LoggerService
```

Same memory reference reused 🧠

---

# 🧪 Proof It Is Singleton

```ts
@Injectable()
export class LoggerService {
  id = Math.random();
}
```

Inject in 2 services:

```ts
console.log(this.logger.id);
```

Both services will print:

```
0.5648392
0.5648392
```

Same instance 😎

---

# 🟡 Want Multiple Instances? (Not Singleton)

You can do:

```ts
@Injectable({ scope: Scope.REQUEST })
```

Now it becomes:

```
New instance per request ❗
```

---

# 📌 Final One Line Definition

> Dependency Injection in NestJS means NestJS automatically creates and provides required class instances (providers) using a centralized container, and by default creates only one shared instance (Singleton) across the entire application.

---

If you want, I can next explain:

* `useClass`
* `useFactory`
* `useValue`
* `useExisting`

(Interview favourite 😄)

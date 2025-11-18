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
Here’s a practical, reusable prompt library tailored for a **Node.js + TypeScript + AWS** backend developer. You can copy-paste and adapt these daily for writing code, adding features, debugging, refactoring, code review, and fixing production issues.

***

## 1. Writing new code / features

### 1.1 Scaffold a typed REST endpoint (Node + TS + Express/Fastify)

```text
You are a senior Node.js + TypeScript backend engineer.

Task: Create a typed REST endpoint for: [DESCRIBE FEATURE].

Context:
- Runtime: Node.js [VERSION]
- Framework: [Express/Fastify/NestJS]
- Validation: [Zod / Joi / class-validator]
- Auth: [JWT / Cognito / IAM / custom]
- DB: [DynamoDB / Postgres / MongoDB]
- Deployment: AWS Lambda + API Gateway OR ECS

Requirements:
- Use TypeScript with strict types.
- Include request/response types.
- Add input validation.
- Handle errors with proper HTTP status codes.
- Follow AWS best practices (e.g., env vars, secrets, IAM roles).
- Do not add unnecessary comments.

Output:
- Show the full file content for the new route/handler.
- Show any new types/interfaces needed.
- Show how to wire this into the existing router/app.
```

***

### 1.2 Design a new service/module

```text
You are a backend architect for a Node.js + TypeScript service on AWS.

I need to add a new feature: [DESCRIBE FEATURE].

Constraints:
- Use clean architecture / layered design (handlers → services → repositories).
- Use dependency injection where appropriate.
- Keep it testable and AWS-friendly (Lambda/ECS, env vars, no hard-coded secrets).
- Assume we use [DynamoDB / RDS / S3 / SQS / SNS / EventBridge].

Tasks:
1. Propose a module structure (files and folders).
2. Define main interfaces/types.
3. Outline key functions and their responsibilities.
4. Show example code for the core service logic.
5. Call out any AWS-specific considerations (IAM, retries, timeouts, idempotency).
```

***

### 1.3 API design prompt

```text
Design a RESTful API for: [FEATURE].

Requirements:
- Resource-oriented design.
- Include endpoints, methods, path params, query params, and request/response schemas.
- Use appropriate HTTP status codes.
- Consider pagination, filtering, sorting where relevant.
- Assume TypeScript types for request/response.
- Mention any AWS services that would back this (e.g., API Gateway + Lambda + DynamoDB).

Output:
- List of endpoints with example requests/responses.
- TypeScript interfaces for main DTOs.
- Notes on auth, rate limiting, and idempotency if relevant.
```

***

## 2. Debugging & troubleshooting

### 2.1 Explain an error and propose a fix

```text
I’m getting this error in my Node.js + TypeScript app:

[PASTE ERROR MESSAGE + STACK TRACE]

Here is the relevant code:

[PASTE CODE SNIPPET]

Context:
- Runtime: Node.js [VERSION]
- Framework: [Express/Fastify/NestJS]
- Deployed on: [Lambda / ECS / EC2]
- DB: [DynamoDB / Postgres / etc.]

Tasks:
1. Explain why this error is happening in simple terms.
2. Identify the root cause.
3. Propose a minimal fix with corrected code.
4. Mention any edge cases or additional checks I should add.
```

***

### 2.2 Debug production issue (with logs)

```text
Act as a senior Node.js backend engineer debugging a production issue.

Symptoms:
- [DESCRIBE: e.g., high latency, 5xx errors, memory spikes, timeouts]
- Timeframe: [WHEN IT STARTED]
- Affected endpoints/services: [LIST]

Logs / metrics (summarized):
[PASTE RELEVANT LOG LINES / METRICS]

Environment:
- Node.js [VERSION], TypeScript
- Running on: [Lambda / ECS / EC2]
- AWS services: [API Gateway, ALB, DynamoDB, RDS, SQS, SNS, etc.]

Tasks:
1. List the top 3–5 likely root causes.
2. For each, explain the reasoning.
3. Suggest concrete next steps: logs to check, metrics to look at, experiments to run.
4. Propose immediate mitigations and longer-term fixes.
```

***

### 2.3 AWS-specific debugging (Lambda / API Gateway / DB)

```text
I have a Node.js + TypeScript Lambda behind API Gateway calling [DynamoDB/RDS/SQS].

Issue: [DESCRIBE: timeouts, throttling, permission errors, cold starts, etc.]

Relevant config:
- Lambda: memory [MB], timeout [s], runtime [VERSION]
- IAM role: [SUMMARIZE KEY PERMISSIONS]
- DB: [TABLE/INDEX DETAILS, CONNECTION POOL IF RDS]
- Observed metrics: [DURATION, ERRORS, THROTTLES, DB LATENCY]

Tasks:
1. Identify likely causes specific to AWS (IAM, VPC, networking, concurrency, DB limits).
2. Suggest configuration changes (memory, timeout, reserved concurrency, indices, etc.).
3. Provide a checklist of things to verify in CloudWatch / X-Ray / DB metrics.
4. Show any code changes needed (retry logic, backoff, connection reuse, etc.).
```

***

## 3. Refactoring & improving code

### 3.1 General refactoring for readability & safety

```text
Refactor this TypeScript code to improve readability, maintainability, and type safety, without changing its external behavior.

Code:
[PASTE CODE]

Guidelines:
- Keep the same public API and behavior.
- Improve naming, reduce nesting, extract helper functions where useful.
- Strengthen TypeScript types (avoid `any`, use proper unions/intersections).
- Add basic error handling if clearly missing.
- Keep it compatible with Node.js [VERSION].

Output:
- Show the refactored code.
- Briefly explain the key changes and why they help.
```

***

### 3.2 SOLID / architecture-focused refactor

```text
Refactor this module to better follow SOLID principles and clean architecture.

Code:
[PASTE CODE]

Context:
- This is part of a Node.js + TypeScript backend on AWS.
- It interacts with [DB / external APIs / message queues].

Tasks:
1. Identify violations of SOLID or common design issues (tight coupling, god classes, etc.).
2. Propose a clearer structure (interfaces, services, repositories, etc.).
3. Show refactored code for the main parts.
4. Explain how this improves testability and future extensibility.
```

***

### 3.3 Performance optimization

```text
Optimize this Node.js + TypeScript code for performance and scalability.

Code:
[PASTE CODE]

Constraints:
- Must remain functionally equivalent.
- Target environment: [Lambda / ECS], Node.js [VERSION].
- DB: [DynamoDB / RDS], with [DESCRIBE LOAD PATTERN].

Tasks:
1. Identify bottlenecks (CPU, I/O, DB queries, unnecessary allocations).
2. Suggest concrete optimizations (caching, batching, indexing, streaming, etc.).
3. Show optimized code.
4. Call out any trade-offs (memory vs CPU, latency vs throughput).
```

***

## 4. Code review prompts

### 4.1 General code review for correctness & production-readiness

```text
Review the following TypeScript code for correctness, security, reliability, and performance. Ignore pure style issues that a linter would catch.

Context:
- File purpose: [WHAT THIS MODULE DOES]
- Runtime: Node.js [VERSION], TypeScript
- Deployment: [Lambda / ECS / EC2]
- DB/external services: [LIST]

Code:
[PASTE CODE / DIFF]

Instructions:
1. Restate what this code does in 2–3 sentences.
2. List any bugs that could cause incorrect output or crashes. For each:
   - Quote the exact line(s).
   - Explain the issue.
   - Suggest a minimal fix.
3. Flag performance issues relevant to this context (not generic advice).
4. Identify security issues (input validation, auth checks, injection risks, secret handling).
5. Point out test coverage gaps: what scenarios are not covered and could regress.

Output format:
- Numbered list of risks, each with:
  - Breakage scenario (concrete example).
  - Mitigation (specific test/guard/change).
```

***

### 4.2 Security-focused review

```text
Perform a security-focused review of this Node.js + TypeScript code.

Code:
[PASTE CODE]

Context:
- Exposed via: [API Gateway / ALB / public internet / internal only]
- Auth: [JWT / Cognito / IAM / API key / none]
- Data handled: [PII / payment / auth tokens / etc.]

Check for:
- Input validation and sanitization.
- Authentication/authorization gaps.
- Injection risks (SQL, NoSQL, command, template).
- Secret management (env vars, AWS Secrets Manager, etc.).
- Logging of sensitive data.
- SSRF / open redirect / CORS issues if applicable.

Output:
- List each issue with severity (High/Medium/Low).
- Explain the risk in one sentence.
- Provide a concrete fix or pattern to apply.
```

***

### 4.3 Diff-based review (PR review)

```text
You are reviewing this PR diff for a Node.js + TypeScript backend service.

Diff:
[PASTE DIFF]

Context:
- Service: [NAME / PURPOSE]
- Deployed on: [Lambda / ECS]
- Key dependencies: [LIST]

Focus on:
- Correctness and logic errors.
- Breaking changes to APIs or types.
- Error handling and edge cases.
- Performance and scalability concerns.
- Security issues.

Output:
- Top 5 risks (most severe first).
- Concrete review comments as bullet points.
- For each comment: what could break, why, and a minimal fix suggestion.
- A short test plan: 6–10 tests to add or verify.
```

***

## 5. Testing & quality

### 5.1 Generate unit tests (Jest / Vitest)

```text
Write unit tests for this TypeScript module using [Jest / Vitest].

Code:
[PASTE CODE]

Requirements:
- Cover happy path, error cases, and important edge cases.
- Mock external dependencies (DB, HTTP clients, AWS SDK) appropriately.
- Use clear test names that describe the scenario.
- Keep tests deterministic and fast.

Output:
- Full test file content.
- Brief notes on what scenarios are covered.
```

***

### 5.2 Add integration tests for an API

```text
Design integration tests for this API endpoint.

Endpoint: [METHOD + PATH]
Behavior: [DESCRIBE]

Environment:
- Node.js + TypeScript
- [Express/Fastify/NestJS]
- DB: [DynamoDB / Postgres]
- Running in: [Lambda / ECS] (tests can run against local or test env)

Tasks:
1. List key test scenarios (success, validation errors, auth failures, edge cases).
2. Show example test code using [Jest + supertest / vitest + test client].
3. Include setup/teardown for DB and any AWS service mocks/fakes.
```

***

## 6. Documentation & onboarding

### 6.1 Generate docs for a function/module

```text
Generate clear, developer-facing documentation for this function/module.

Code:
[PASTE CODE]

Include:
- Purpose in 1–2 sentences.
- Inputs (parameters, types, constraints).
- Outputs (return type, possible errors).
- Example usage (TypeScript code).
- Any important edge cases or caveats.
- AWS-specific notes if relevant (timeouts, retries, IAM, etc.).

Output:
- JSDoc-style comments or a short markdown section.
```

***

### 6.2 Explain a codebase for onboarding

```text
I’m onboarding to a Node.js + TypeScript backend codebase on AWS.

Here is the repo structure and key files:

[PASTE TREE / LIST OF IMPORTANT FILES]

Tasks:
1. Explain the high-level architecture in simple terms.
2. Describe the main modules/services and their responsibilities.
3. Show how a typical request flows through the system (entry point → handlers → services → DB/external).
4. Highlight any AWS-specific patterns (Lambda, API Gateway, SQS/SNS, etc.).
5. Suggest 3–5 files I should read first to understand the core logic.
```

***

## 7. Production incident & post-mortem support

### 7.1 Draft an incident summary

```text
Help me draft a concise incident summary for stakeholders.

Incident:
- What happened: [DESCRIBE]
- Impact: [USERS/ENDPOINTS AFFECTED, DURATION]
- Root cause (current understanding): [SUMMARIZE]
- Mitigation taken: [WHAT WE DID TO RESTORE SERVICE]
- Next steps: [FIXES, MONITORING, PREVENTION]

Tone: Clear, factual, non-blaming.
Audience: Engineering + product + leadership.

Output:
- 5–8 bullet summary suitable for Slack/email.
```

***

### 7.2 Post-mortem outline

```text
Create a post-mortem outline for this incident.

Incident details:
- Timeline: [KEY EVENTS WITH TIMES]
- Impact: [METRICS, USERS, REVENUE IF ANY]
- Root cause: [TECHNICAL EXPLANATION]
- Contributing factors: [PROCESS, TOOLING, CONFIG, etc.]
- Actions taken: [IMMEDIATE FIXES]

Tasks:
1. Structure a post-mortem document (sections and bullet points).
2. Suggest concrete action items with owners and timeframes.
3. Include monitoring/alerting improvements to detect this earlier next time.
```

***

## 8. AWS architecture & design prompts

### 8.1 Choose an architecture for a new feature

```text
I’m designing a new feature: [DESCRIBE].

Constraints:
- Backend: Node.js + TypeScript.
- Prefer serverless where sensible.
- Must be secure, scalable, and cost-efficient on AWS.

Tasks:
1. Propose 2–3 architecture options (e.g., Lambda+API Gateway, ECS+Fargate, etc.).
2. For each, list pros/cons (latency, cost, complexity, operational overhead).
3. Recommend one option and explain why.
4. Outline key AWS services involved and how they interact.
5. Call out important non-functional requirements (security, observability, DR).
```

***

### 8.2 Review an existing architecture

```text
Review this architecture for a Node.js + TypeScript service on AWS.

Current setup:
- [Lambda/ECS/EC2], [API Gateway/ALB], [DynamoDB/RDS], [SQS/SNS/EventBridge], etc.
- Rough diagram or description: [PASTE]

Focus on:
- Scalability and performance.
- Reliability and fault tolerance.
- Security (IAM, network, secrets).
- Observability (logs, metrics, tracing).
- Cost efficiency.

Output:
- List of strengths.
- List of risks or weaknesses.
- Concrete recommendations (config changes, additional services, patterns).
```

***

If you tell me your typical stack (e.g., Express vs Nest, DynamoDB vs RDS, Lambda vs ECS), I can tailor a smaller “daily 10” set of prompts you can keep pinned in your editor.








Here’s a compact, daily-use prompt set for a **senior Node.js + TypeScript + AWS backend developer**. Keep these handy and just fill in the brackets.

***

## 1. Fixing issues / debugging

### 1.1 Root-cause analysis (complex bug)

```text
You are a senior Node.js + TypeScript backend engineer debugging a production issue.

Error:
[PASTE FULL ERROR + STACK TRACE]

Relevant code:
[PASTE CODE SNIPPET]

Environment:
- Node.js [VERSION], TypeScript
- Framework: [Express/Fastify/NestJS]
- Deployed on: [Lambda / ECS / EC2]
- DB/external: [DynamoDB / RDS / SQS / SNS / HTTP APIs]
- Symptoms: [e.g., only under load, intermittent, specific endpoint]

What I’ve already tried:
[LIST ATTEMPTS]

Tasks:
1. Explain what this error means in plain English.
2. Identify the most likely root cause.
3. List 3–5 hypotheses, ordered by likelihood.
4. For each, say what logs/metrics/tests would confirm or rule it out.
5. Propose a minimal, safe fix and explain why it addresses the root cause.
```

***

### 1.2 Production incident triage

```text
Act as a senior SRE/backend engineer triaging a production incident.

Symptoms:
- [5xx spikes / latency / timeouts / memory / CPU / DB errors]
- Timeframe: [WHEN IT STARTED]
- Affected services/endpoints: [LIST]

Environment:
- Node.js + TypeScript
- [Lambda / ECS / EC2], [API Gateway / ALB]
- DB: [DynamoDB / RDS], queues: [SQS/SNS/EventBridge]

Logs/metrics (summarized):
[PASTE KEY LOG LINES / METRICS]

Tasks:
1. List top 3–5 likely root causes with reasoning.
2. Suggest immediate mitigations to reduce impact.
3. Provide a focused checklist: which logs, metrics, and traces to inspect next.
4. Outline longer-term fixes and preventive measures.
```

***

## 2. Writing unit tests

### 2.1 Unit tests for a function/module (Jest/Vitest)

```text
You are a senior Node.js + TypeScript engineer.

Write unit tests for this code using [Jest / Vitest].

Code:
[PASTE FUNCTION/MODULE]

Requirements:
- Cover happy path, error cases, and key edge cases.
- Mock external dependencies (DB, HTTP clients, AWS SDK).
- Use clear, descriptive test names.
- Keep tests fast and deterministic.
- Follow AAA pattern (Arrange–Act–Assert).

Output:
- Full test file content.
- Brief note on what scenarios are covered.
```

***

### 2.2 Turn a bug into a regression test

```text
I fixed this bug: [DESCRIBE BUG IN 1–2 LINES].

Here is the final fixed code:
[PASTE CODE]

Tasks:
1. Write a unit test that would have failed before the fix and passes now.
2. Make the test clearly express the bug scenario in its name.
3. Ensure it’s deterministic and doesn’t depend on external services.

Output:
- Test file content.
- One-line explanation of what regression this prevents.
```

***

## 3. Integration tests

### 3.1 API integration tests (routes + DB)

```text
Design integration tests for this API endpoint.

Endpoint: [METHOD + PATH]
Behavior: [DESCRIBE WHAT IT DOES]

Stack:
- Node.js + TypeScript
- [Express/Fastify/NestJS]
- DB: [DynamoDB / Postgres], test DB: [local / Docker / test instance]
- Test framework: [Jest + supertest / Vitest + test client]

Tasks:
1. List key scenarios: success, validation errors, auth failures, edge cases.
2. Show example integration tests with setup/teardown.
3. Mock or isolate external services (email, third-party APIs, queues).
4. Ensure tests can run in CI reliably.

Output:
- Test file content.
- Short notes on how to run these tests locally and in CI.
```

***

## 4. Code review & refactoring

### 4.1 Focused code review (correctness + risk)

```text
Review this TypeScript code for correctness, reliability, and production-readiness. Ignore pure style issues that a linter would catch.

Context:
- File purpose: [WHAT THIS MODULE DOES]
- Runtime: Node.js [VERSION], TypeScript
- Deployed on: [Lambda / ECS / EC2]
- DB/external: [LIST]

Code:
[PASTE CODE / DIFF]

Tasks:
1. In 2–3 sentences, restate what this code does.
2. List concrete bugs or risky behaviors that could cause incorrect output or crashes.
   - Quote exact lines.
   - Explain the issue.
   - Suggest a minimal fix.
3. Call out performance issues relevant to this context.
4. Identify security issues (input validation, auth checks, injection, secrets).
5. List 5–8 test cases that should exist to protect this logic.

Output:
- Numbered list of risks with specific fixes.
- Short test plan as bullets.
```

***

### 4.2 Refactor for clarity & safety

```text
Refactor this TypeScript code to improve readability, maintainability, and type safety without changing external behavior.

Code:
[PASTE CODE]

Guidelines:
- Keep public API and behavior unchanged.
- Improve naming, reduce nesting, extract helpers where useful.
- Strengthen types (avoid `any`, use proper unions/intersections).
- Add basic error handling if clearly missing.
- Keep it compatible with Node.js [VERSION].

Output:
- Refactored code.
- Brief explanation of key changes and why they help.
```

***

## 5. Production fix workflow

### 5.1 From symptom to safe patch

```text
You are a senior backend engineer preparing a production fix.

Symptom:
[DESCRIBE WHAT USERS/SYSTEM SEE]

Error/logs:
[PASTE ERROR + RELEVANT LOGS]

Current code (suspect area):
[PASTE CODE]

Constraints:
- Must minimize risk and be easy to roll back.
- No breaking changes to API or data schema.
- Environment: Node.js [VERSION], [Lambda/ECS], [DB].

Tasks:
1. State the most likely root cause in 1–2 lines.
2. Propose the smallest safe change that fixes it.
3. Show the exact code diff.
4. List regression tests to add or verify before deploying.
5. Suggest a quick monitoring check to confirm the fix in prod.
```

***

If you want, I can condense this further into a “top 5 daily prompts” version you can paste into your AI chat sidebar.






Below are short daily prompts tailored to your **Node.js + TypeScript + AWS** work. For better Copilot results, attach the relevant files, state the goal and constraints, and ask for a specific output such as a patch or test plan. [github](https://github.blog/ai-and-ml/github-copilot/a-developers-guide-to-writing-debugging-reviewing-and-shipping-code-faster-with-github-copilot/)

## Debugging

```text
Debug this issue. Identify the root cause, explain it simply, propose the smallest safe fix, and add a regression test. Do not change public API behavior.
```

```text
Analyze this error and stack trace: [paste]. Check async flow, null values, types, retries, and external dependencies. List likely causes in priority order and show the fix.
```

```text
Review the selected code for bugs, race conditions, memory leaks, unhandled promises, and incorrect error handling. Show only actionable findings with fixes.
```

## Production issues

```text
Act as a senior Node.js/AWS engineer. Investigate this production issue using the logs and metrics below: [paste]. Give probable root causes, immediate mitigation, safe code fix, and CloudWatch metrics to monitor.
```

```text
This Lambda/ECS API is timing out: [details]. Check timeout, memory, concurrency, database calls, connection reuse, retries, and AWS permissions. Recommend the smallest safe change first.
```

```text
Create a production-safe patch for this issue: [issue]. Keep backward compatibility, avoid schema changes, add a regression test, and provide rollout and rollback steps.
```

## Refactoring

```text
Refactor the selected TypeScript code for readability, maintainability, and strict type safety. Keep the same behavior and public API. Avoid any and unnecessary dependencies.
```

```text
Review this module for duplication, deep nesting, poor naming, tight coupling, and performance issues. Propose a small refactor plan first; then implement only the approved changes.
```

```text
Convert this code into clean layers: controller/handler, service, repository, and types. Preserve current behavior and add tests for the extracted business logic.
```

## Tests

```text
Write Jest/Vitest unit tests for the selected TypeScript function. Cover happy path, validation failures, exceptions, boundary cases, and mocked AWS/HTTP dependencies. Keep tests deterministic.
```

```text
Write an integration test for this API endpoint: [METHOD + PATH]. Cover success, invalid input, authentication/authorization, not found, and dependency failure cases.
```

```text
Create a regression test for this bug: [describe bug]. The test must fail with the old behavior and pass after the fix.
```

## Documentation and AWS diagrams

```text
Document this module for another developer: purpose, request flow, inputs, outputs, errors, dependencies, environment variables, and one usage example.
```

```text
Create concise README documentation for this feature: setup, API contract, configuration, local run steps, tests, and deployment notes.
```

```text
Create a Mermaid AWS architecture diagram for this system: [describe system]. Include users, API Gateway/ALB, Lambda or ECS, SQS/SNS/EventBridge, database, S3, Secrets Manager, IAM, CloudWatch, and data flow. Return only valid Mermaid code.
```

## Best daily format

Use this structure with any prompt:

```text
Context: [service/file/feature]
Problem: [error or required behavior]
Constraints: [no breaking change, Node version, AWS service, deadline]
Output: [code patch / root cause / tests / Mermaid diagram]
```

For example:

```text
Context: NestJS Lambda using DynamoDB.
Problem: Duplicate orders are created when SQS retries a message.
Constraints: No schema change; preserve existing API.
Output: Root cause, minimal idempotency fix, Jest tests, and CloudWatch metrics to alert on.
```
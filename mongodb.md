# MongoDB offers various types of indexes to support efficient execution of queries. Here are the most common and important types:

1.  **Default `_id` Index:**
    * **Description:** MongoDB automatically creates a unique index on the `_id` field for every collection. This index is essential for fast lookups by ID and ensures that each document in a collection has a unique `_id`.
    * **Example:** You don't create this; it exists by default. Queries like `db.users.findOne({ _id: ObjectId("...") })` use this index.

2.  **Single Field Index:**
    * **Description:** An index on a single field in a document. It can be ascending (`1`) or descending (`-1`). The order matters for sort operations.
    * **Use Case:** Speeds up queries and sorts on that specific field.
    * **Example:**
        ```javascript
        db.users.createIndex({ "email": 1 }); // Ascending index on 'email'
        db.products.createIndex({ "price": -1 }); // Descending index on 'price'
        ```

3.  **Compound Index:**
    * **Description:** An index that includes multiple fields. The order of fields in a compound index is crucial because MongoDB uses a "left-prefix" optimization (it can use the index for queries that involve a prefix of the indexed fields).
    * **Use Case:** Optimizes queries that involve multiple fields, especially those that frequently appear together in `find()` and `sort()` operations.
    * **Example:**
        ```javascript
        // Index on 'item' (ascending) and 'quantity' (descending)
        db.orders.createIndex({ "item": 1, "quantity": -1 });
        // This index can be used for queries on:
        // - { item: "A" }
        // - { item: "A", quantity: { $gt: 5 } }
        // - { item: "A" } sort by { quantity: 1 or -1 }
        ```

4.  **Multikey Index:**
    * **Description:** If a field in a document is an array, MongoDB automatically creates a multikey index if you create an index on that field. An index key is created for each element of the array.
    * **Use Case:** Efficiently query documents that contain specific elements within an array.
    * **Example:**
        ```javascript
        // Document: { "name": "Book", "tags": ["fiction", "fantasy", "adventure"] }
        db.books.createIndex({ "tags": 1 });
        // This index helps queries like:
        // db.books.find({ tags: "fantasy" });
        ```

5.  **Text Index:**
    * **Description:** Supports text search queries on string content within a collection. You can index one or more fields that hold string data.
    * **Use Case:** Implementing full-text search capabilities (e.g., search bars).
    * **Example:**
        ```javascript
        db.articles.createIndex({ "title": "text", "content": "text" });
        // Query example:
        // db.articles.find({ $text: { $search: "database systems" } });
        ```

6.  **Geospatial Index (`2dsphere`, `2d`):**
    * **Description:** Supports queries on geospatial data, such as finding points within a certain radius or polygon.
        * `2dsphere`: Supports queries on a sphere (earth-like coordinates).
        * `2d`: Supports queries on a 2D plane.
    * **Use Case:** Location-based services (e.g., "find restaurants near me").
    * **Example:**
        ```javascript
        // Assuming documents have a 'location' field like { type: "Point", coordinates: [long, lat] }
        db.places.createIndex({ "location": "2dsphere" });
        // Query example:
        // db.places.find({ location: { $near: { $geometry: { type: "Point", coordinates: [ -73.9667, 40.78 ] }, $maxDistance: 1000 } } });
        ```

7.  **Hashed Index:**
    * **Description:** Computes a hash of the value for an indexed field.
    * **Use Case:** Primarily used for sharding a collection based on a hashed sharding key, providing more even data distribution across shards, especially for monotonically increasing keys.
    * **Example:**
        ```javascript
        db.events.createIndex({ "timestamp": "hashed" });
        ```

8.  **Unique Index:**
    * **Description:** Ensures that no two documents in the collection have the same value for the indexed field(s). It can be applied to single-field or compound indexes.
    * **Use Case:** Enforcing uniqueness constraints (e.g., unique email addresses, usernames).
    * **Example:**
        ```javascript
        db.users.createIndex({ "username": 1 }, { unique: true });
        ```

9.  **Partial Index:**
    * **Description:** Indexes only the documents in a collection that satisfy a specified filter expression.
    * **Use Case:** Reducing index size and maintenance overhead by indexing only relevant documents, especially useful for sparse data or specific query patterns.
    * **Example:**
        ```javascript
        // Index only active users
        db.users.createIndex({ "email": 1 }, { partialFilterExpression: { "status": "active" } });
        ```

10. **TTL (Time-To-Live) Index:**
    * **Description:** Special single-field indexes that MongoDB uses to automatically remove documents from a collection after a certain amount of time or at a specific clock time. These indexes are on a single-field that holds Date objects.
    * **Use Case:** Storing temporary data (e.g., session data, logs, event data that expires).
    * **Example:**
        ```javascript
        // Documents in 'log_events' will be deleted 24 hours after their 'createdAt' field value
        db.log_events.createIndex({ "createdAt": 1 }, { expireAfterSeconds: 86400 }); // 86400 seconds = 24 hours
        ```




// second and third highest salary using mongodb, aggregation pipeline, how to design schema for reference and join two collenction.


An aggregation pipeline in MongoDB is a way to process documents step‑by‑step. Each step (called a *stage*) transforms the data, and the output of one stage becomes the input of the next. It’s used for things like filtering, grouping, counting, averaging, and joining data—similar to doing multiple SQL operations in one query.[1][2][3][4]

### Simple example: total likes per category

Collection `posts`:

```json
[
  { "title": "A", "category": "tech",  "likes": 3 },
  { "title": "B", "category": "tech",  "likes": 1 },
  { "title": "C", "category": "music", "likes": 5 }
]
```

Aggregation:

```js
db.posts.aggregate([
  { $match: { likes: { $gt: 1 } } },          // keep docs with likes > 1
  { $group: { _id: "$category",              // group by category
              totalLikes: { $sum: "$likes" } } } // sum likes per group
]);
```

Result:

```json
[
  { "_id": "tech",  "totalLikes": 3 },
  { "_id": "music", "totalLikes": 5 }
]
```

Here:
- `$match` filters documents (like WHERE).[2][4]
- `$group` groups them and calculates totals.[4][2]

### Another quick example: average age by city

```js
db.users.aggregate([
  { $match: { active: true } },
  { $group: { _id: "$city", avgAge: { $avg: "$age" } } },
  { $sort: { avgAge: -1 } }
]);
```

This:
- Filters active users,
- Groups by `city`,
- Computes `avgAge`,
- Sorts cities by average age.[3][5]

So, **aggregation pipeline = array of stages like `$match`, `$group`, `$sort`, `$project` that you chain to get powerful analytics in MongoDB**.


        




Assume a collection `employees` with a `salary` field.

### Using `find` (simple)

```js
// second highest salary
db.employees.find({})
  .sort({ salary: -1 })
  .skip(1)
  .limit(1);

// third highest salary
db.employees.find({})
  .sort({ salary: -1 })
  .skip(2)
  .limit(1);
```

`sort({ salary: -1 })` orders salaries descending, `skip(n)` skips the top `n` docs, and `limit(1)` returns just that one.[1][2]

### Using aggregation

```js
// second highest
db.employees.aggregate([
  { $sort: { salary: -1 } },
  { $skip: 1 },
  { $limit: 1 }
]);

// third highest
db.employees.aggregate([
  { $sort: { salary: -1 } },
  { $skip: 2 },
  { $limit: 1 }
]);
```







In MongoDB there are **two main ways** to model relations and “join” data:

1. **Embedding** (store related data inside one document)  
2. **Referencing + `$lookup`** (store only IDs and join via aggregation)

### 1) Embedding (no separate collection)

Example: `users` with embedded `addresses`.

```js
// users document
{
  _id: ObjectId("u1"),
  name: "Vivek",
  addresses: [
    { type: "home", city: "Delhi" },
    { type: "office", city: "Gurgaon" }
  ]
}
```

- All data in one document; no join needed.  
- Good when:
  - One‑to‑few, data is small and usually read together.[1][2]
  - Fewer collections, faster reads.

### 2) Referencing + `$lookup` (two collections)

Example: `users` and `orders` collections.

```js
// users
{ _id: ObjectId("u1"), name: "Vivek" }

// orders
{ _id: ObjectId("o1"), userId: ObjectId("u1"), amount: 1000 }
```

**Schema idea**

- `orders.userId` stores a reference to `users._id` (ObjectId).[3][4]

**Join using aggregation**

```js
db.users.aggregate([
  {
    $lookup: {
      from: "orders",          // collection to join
      localField: "_id",       // users._id
      foreignField: "userId",  // orders.userId
      as: "orders"             // joined array field
    }
  }
]);
```

Result:

```js
[
  {
    _id: ObjectId("u1"),
    name: "Vivek",
    orders: [
      { _id: ObjectId("o1"), userId: ObjectId("u1"), amount: 1000 }
    ]
  }
]
```

- This is similar to SQL JOIN using `$lookup`.[5][6]
- Good when:
  - Many orders per user (one‑to‑many, large data).
  - Different lifecycles or access patterns.

### Short interview line

“In MongoDB you either **embed** related documents in the same collection or **reference** them using IDs and join with `$lookup` in an aggregation pipeline. Embedding is best for small, read‑heavy one‑to‑few data; referencing is better for large, frequently changing or many‑to‑many relations.”
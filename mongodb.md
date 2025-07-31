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







        
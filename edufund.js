// Let's break this into small, practical steps so you can clearly design a **Train Availability System** (like IRCTC or Trainline) as a Node.js engineer.

// ***

// ## 1. The Goal
// You want to create an API where users can search train availability by:
// - **Source station**
// - **Destination station**
// - **Date of journey**

// Example:
// ```
// GET /trains?source=NDLS&destination=BCT&date=2024-07-15
// ```

// Response: List of trains between New Delhi (NDLS) and Mumbai Central (BCT) on July 15.

// ***

// ## 2. Choose the Right Database

// | Database | Why Use It |
// |-----------|-------------|
// | **PostgreSQL** | Best for strong relational data (stations, routes, bookings). Efficient joins. Mature ecosystem with TypeORM. |
// | **MongoDB** | More flexible schema, good for prototyping, fast lookups but not ideal for many relational joins. |

// ✅ **Recommendation:** **PostgreSQL** with **TypeORM** for a structured and reliable system.

// ***

// ## 3. Database Schema (Simplified)

// ### **stations** table
// | Field | Type | Description |
// |--------|------|--------------|
// | id | SERIAL PK | Station ID |
// | code | VARCHAR | e.g., NDLS |
// | name | VARCHAR | e.g., New Delhi |

// ***

// ### **trains** table
// | Field | Type | Description |
// |--------|------|--------------|
// | id | SERIAL PK | Train ID |
// | name | VARCHAR | e.g., Rajdhani Express |
// | number | VARCHAR | e.g., 12951 |

// ***

// ### **train_routes** table (maps stations to trains in order)
// | Field | Type | Description |
// |--------|------|--------------|
// | id | SERIAL PK | ID |
// | train_id | FK (trains) | which train |
// | station_id | FK (stations) | station stop |
// | stop_order | INTEGER | order of stop |
// | arrival_time | TIME | arrival time |
// | departure_time | TIME | departure time |
// | day_offset | INTEGER | day count from origin |

// ***

// ### **train_availability** table (daily availability)
// | Field | Type | Description |
// |--------|------|--------------|
// | id | SERIAL PK | ID |
// | train_id | FK (trains) | which train |
// | date | DATE | journey date |
// | available_seats | INTEGER | available seats |

// ***

// ## 4. Query Logic

// When a user searches by `source`, `destination`, and `date`:
// 1. Find all trains that **pass through** both source and destination in route order (source stop_order < destination stop_order).
// 2. Join with `train_availability` for the given date.
// 3. Return train details, timings, and available seats.

// **SQL Example:**
// ```sql
// SELECT t.id, t.name, t.number, 
//        src.departure_time AS source_departure, 
//        dest.arrival_time AS destination_arrival, 
//        a.available_seats
// FROM train_routes src
// JOIN train_routes dest ON src.train_id = dest.train_id
// JOIN trains t ON t.id = src.train_id
// JOIN train_availability a ON a.train_id = t.id
// WHERE src.station_id = (SELECT id FROM stations WHERE code = 'NDLS')
//   AND dest.station_id = (SELECT id FROM stations WHERE code = 'BCT')
//   AND src.stop_order < dest.stop_order
//   AND a.date = '2024-07-15';
// ```

// ***

// ## 5. API Design (NestJS or Express)

// ### **Route:**
// ```
// GET /trains?source=NDLS&destination=BCT&date=2024-07-15
// ```

// ### **Controller Example (NestJS)**
// ```typescript
// @Get()
// async findAvailableTrains(
//   @Query('source') source: string,
//   @Query('destination') destination: string,
//   @Query('date') date: string
// ) {
//   return this.trainsService.findAvailableTrains(source, destination, date);
// }
// ```

// ### **Service Logic (TypeORM)**
// ```typescript
// async findAvailableTrains(source: string, destination: string, date: string) {
//   return this.dataSource.query(
//     `SELECT t.name, t.number, src.departure_time, dest.arrival_time, a.available_seats
//      FROM train_routes src
//        JOIN train_routes dest ON src.train_id = dest.train_id
//        JOIN trains t ON t.id = src.train_id
//        JOIN train_availability a ON a.train_id = t.id
//      WHERE src.station_id = (SELECT id FROM stations WHERE code = $1)
//        AND dest.station_id = (SELECT id FROM stations WHERE code = $2)
//        AND src.stop_order < dest.stop_order
//        AND a.date = $3`,
//     [source, destination, date],
//   );
// }
// ```

// ***

// ## 6. Example Output
// ```json
// [
//   {
//     "name": "Rajdhani Express",
//     "number": "12951",
//     "source_departure": "08:10",
//     "destination_arrival": "20:40",
//     "available_seats": 42
//   },
//   {
//     "name": "Duronto Express",
//     "number": "12263",
//     "source_departure": "09:10",
//     "destination_arrival": "21:15",
//     "available_seats": 12
//   }
// ]
// ```

// ***

// ## 7. Optional Enhancements
// - Add caching (Redis) for frequent route/date queries.
// - Add seat class filters (Sleeper, AC, etc.).
// - Integrate rate limiting and authentication (for user-based bookings).
// - Use background job (BullMQ) to update seat availability dynamically.

// ***

// ## Summary
// **Database:** PostgreSQL (relational consistency)
// **ORM:** TypeORM
// **API:** REST (NestJS or Express)
// **Core Tables:** stations, trains, train_routes, train_availability
// **Search Logic:** join by route + order + date

// This structure is efficient, scalable, and production-ready for a train search API.
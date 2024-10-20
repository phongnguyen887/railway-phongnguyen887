
// import postgres from 'postgres'

// // see env variables in .env
// import {PGCONNECT} from '$env/static/private';

// const sql = postgres(PGCONNECT, {} )

// export default sql;

import { POSTGRES_URL } from '$env/static/private'

export default POSTGRES_URL;

// async function seed() {
//   const createTable = await sql`
//     CREATE TABLE IF NOT EXISTS containers (
//         containerNumber varchar, 
//         nameOfShip varchar, 
//         containerSize float, 
//         dateContainerShipped varchar
//     );
//     `

//   console.log(`Created "container" table`)

//   const containers = await Promise.all([
//     sql`
//           INSERT INTO containers VALUES(
//           '123','COSCO Star',50,'2024-01-01'
//           );
//       `,
//     sql`
//           INSERT INTO containers VALUES(
//           '456J','MAERSK Rock',25.600000000000000532,'2024-03-08'
//           );
//       `,
//     sql`
//           INSERT INTO containers VALUES(
//           'x1','Betty',34,'2024-05-14'
//           );
//       `,
//     sql`
//         CREATE UNIQUE INDEX idx_containers_containerNumber 
//         ON containers (containerNumber);

//     `,
//   ])
//   console.log(`Seeded ${containers.length} containers`)

//   return {
//     createTable,
//     containers,
//   }
// }

// export async function load() {
//   const db = createPool({ connectionString: POSTGRES_URL })

//   try {
//     const { rows: containers } = await db.query('SELECT * FROM container')
//     return {
//       containers: containers
//     }
//   } catch (error) {
//     if (error?.message === `relation "container" does not exist`) {
//       console.log(
//         'Table does not exist, creating and seeding it with dummy data now...'
//       )
//     // Table is not created yet
//       await seed()
//       const { rows: containers } = await db.query('SELECT * FROM containers')
//       return {
//         containers: containers
//       }
//     } else {
//       throw error
//     }
//   }
// }

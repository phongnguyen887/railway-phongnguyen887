// import { sql } from "@vercel/postgres";

async function seed() {
  const createTable = await sql`
    CREATE TABLE IF NOT EXISTS containers (
        containerNumber varchar, 
        nameOfShip varchar, 
        containerSize float, 
        dateContainerShipped varchar
    );
    `

  console.log(`Created "container" table`)

  const containers = await Promise.all([
    sql`
          INSERT INTO containers VALUES(
          '123','COSCO Star',50,'2024-01-01'
          );
      `,
    sql`
          INSERT INTO containers VALUES(
          '456J','MAERSK Rock',25.600000000000000532,'2024-03-08'
          );
      `,
    sql`
          INSERT INTO containers VALUES(
          'x1','Betty',35,'2024-05-14'
          );
      `,
    sql`
        CREATE UNIQUE INDEX idx_containers_containerNumber 
        ON containers (containerNumber);

    `,
  ])
  console.log(`Seeded ${containers.length} containers`)

  return {
    createTable,
    containers,
  }
}

export default seed;
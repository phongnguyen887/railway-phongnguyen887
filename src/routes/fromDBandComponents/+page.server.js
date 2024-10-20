
// import sql from '$lib/server/database';

// export async function load() {
//     const rows = await sql`
//     SELECT
//         containerNumber,
//         nameOfShip,
//         containerSize,
//         dateContainerShipped
//     FROM
//         containers`;

//     console.log({rows});

//     return { containers: rows };
// }


import POSTGRES_URL from '$lib/server/database';
import { createPool } from '@vercel/postgres';

export async function load() {
    try{
        const db = createPool({ connectionString: POSTGRES_URL})
        const { rows: containers } = await db.query(
            `SELECT containerNumber,
                nameOfShip,
                containerSize,
                dateContainerShipped 
            FROM containers`
        )
        return {
            containers: containers
        }
    } catch (error) {
        if  (error?.message === `relation "container" does not exist`) {
                console.log(
                    'Table does not exist, creating and seeding it with dummy data now...'
                )
                // Table is not created yet
        }else{
            throw error
        }
    }
}

import {db} from "./server.js";
//db.query (
//    `insert into guestbook (guest_name,guest_address,guest_number,guest_comment)
//    values ('Vahit','Norwich','04445551100','Its a lovely day today!')`);
db.query(
        `INSERT INTO guestbook (guest_name, guest_address, guest_number, guest_comment) VALUES ($1, $2, $3, $4) RETURNING *`,
        ['Uras', 'Norwich', '07501501133', 'Its a wonderful message'])

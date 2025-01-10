import {db} from "./server.js";
db.query (
    `insert into guestbook (guest_name,guest_address,guest_number,guest_comment)
    values ('Emine','Norwich','07775554400','Great to be a part of what you are doing here!')`);

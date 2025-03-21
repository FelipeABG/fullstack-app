import db from "../db.js";

export function get_users(_, res) {
   const query = "select * from users;";

   db.query(query, (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json(data);
   });
}

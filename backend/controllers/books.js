import db from "../db.js";

export function get_books(_, res) {
   const query = "select * from books;";

   db.query(query, (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json(data);
   });
}

export function delete_books(req, res) {
   const query = `delete from books where id=${req.params.bookid};`;

   db.query(query, (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json(data);
   });
}

export function post_books(req, res) {
   const query = `insert into users values (null, "${req.body.name}", "${req.body.email}");`;

   db.query(query, (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json(data);
   });
}

export function put_books(req, res) {
   const query = `UPDATE users SET name = "${req.body.name}", email = "${req.body.email}" WHERE id = ${req.body.id};`;

   db.query(query, (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json(data);
   });
}

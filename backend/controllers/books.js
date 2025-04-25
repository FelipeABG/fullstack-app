import db from "../db.js";

function validateBook(book) {
   const errors = [];

   if (!book.title || typeof book.title != "string" || book.title.length > 70) {
      errors.push("Invalid or missing 'title'");
   }

   if (
      !book.author ||
      typeof book.author != "string" ||
      book.author.length > 70
   ) {
      errors.push("Invalid or missing 'author'");
   }

   if (!book.genre || typeof book.genre != "string" || book.genre.length > 50) {
      errors.push("Invalid or missing 'genre'");
   }

   if (
      book.published_year === undefined ||
      !Number.isInteger(book.published_year) ||
      book.published_year <= 0
   ) {
      errors.push("Invalid or missing 'published_year'");
   }

   if (
      book.pages === undefined ||
      !Number.isInteger(book.pages) ||
      book.pages <= 0
   ) {
      errors.push("Invalid or missing 'pages'");
   }

   return errors;
}

export function get_books(_, res) {
   const query = "SELECT * FROM books;";

   db.query(query, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
   });
}

export function delete_books(req, res) {
   const bookid = parseInt(req.params.bookid);

   if (!Number.isInteger(bookid))
      return res.status(400).json({ error: "Invalid book ID" });

   const query = "DELETE FROM books WHERE id = ?";
   db.query(query, [bookid], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
   });
}

export function post_books(req, res) {
   const errors = validateBook(req.body);
   if (errors.length > 0) return res.status(400).json({ errors });

   const insertQuery =
      "INSERT INTO books (title, author, genre, published_year, pages) VALUES (?, ?, ?, ?, ?)";

   const values = [
      req.body.title,
      req.body.author,
      req.body.genre,
      req.body.published_year,
      req.body.pages,
   ];

   db.query(insertQuery, values, (err, result) => {
      if (err) return res.status(500).json(err);

      const newBookId = result.insertId;
      const selectQuery = "SELECT * FROM books WHERE id = ?";

      db.query(selectQuery, [newBookId], (err, rows) => {
         if (err) return res.status(500).json(err);
         return res.status(201).json(rows[0]);
      });
   });
}

export function put_books(req, res) {
   const bookid = parseInt(req.params.bookid);

   if (!Number.isInteger(bookid))
      return res.status(400).json({ error: "Invalid book ID" });

   const errors = validateBook(req.body);
   if (errors.length > 0) return res.status(400).json({ errors });

   const query = `
      UPDATE books
      SET title = ?, author = ?, genre = ?, published_year = ?, pages = ?
      WHERE id = ?
   `;

   const values = [
      req.body.title,
      req.body.author,
      req.body.genre,
      req.body.published_year,
      req.body.pages,
      bookid,
   ];

   db.query(query, values, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
   });
}

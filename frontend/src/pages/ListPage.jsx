import { BooksList } from "../components/BooksList";

export function ListPage({ books, setBooks }) {
   return <BooksList books={books} setBooks={setBooks} />;
}

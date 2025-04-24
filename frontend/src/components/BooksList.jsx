export function BooksList({ books, setBooks }) {
   const deleteBook = (id) => () => {
      fetch(`http://localhost:8000/books/${id}`, {
         method: "DELETE",
      }).then((response) => {
         if (response.status === 200) {
            setBooks((prev) => prev.filter((book) => book.id != id));
         }
      });
   };

   return (
      <div className="flex flex-1 flex-col items-center justify-center gap-[20px]">
         <div className="text-[2rem] font-bold">Books</div>
         <div className="w-[30vw] h-[80vh] rounded-lg border-2 border-[#dec8ac] overflow-scroll">
            <div className="grid grid-cols-4 w-full h-[5vh] bg-[#f4e6d2] rounded-t-lg">
               <div className="font-bold px-4 py-2">Title</div>
               <div className="font-bold px-4 py-2">Author</div>
               <div className="font-bold px-4 py-2">Published</div>
            </div>
            {books.map((book) => (
               <div className="grid grid-cols-4 w-full h-[7vh] border-b border-[#dec8ac] items-center text-[#273b53] bg-[#fefaf3]">
                  <div className="truncate px-4" title={book.title}>
                     {book.title}
                  </div>
                  <div className="truncate px-4" title={book.author}>
                     {book.author}
                  </div>
                  <div className="truncate px-8">{book.published_year}</div>
                  <div className="flex justify-center">
                     <button
                        className="px-4 py-1 bg-[#af5649] text-white border border-[#9d180c] rounded-md hover:bg-[#9d180c] transition"
                        onClick={deleteBook(book.id)}
                     >
                        Delete
                     </button>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}

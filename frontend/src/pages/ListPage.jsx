import { useEffect, useState } from "react";

export function ListPage() {
   const [books, setBooks] = useState([]);

   useEffect(() => {
      fetch("http://localhost:8000/books")
         .then((response) => response.json())
         .then((response) => setBooks(response));
   }, []);

   return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-[20px]">
         <div className="text-[2rem] font-bold">Books</div>
         <div className="w-[30vw] h-[80vh] rounded-lg border-2 border-[#dec8ac] overflow-scroll">
            <div className="grid grid-cols-3 w-full h-[5vh] bg-[#f4e6d2] rounded-t-lg">
               <div className="font-bold px-4 py-2">Title</div>
               <div className="font-bold px-4 py-2">Author</div>
               <div className="font-bold px-4 py-2">Published</div>
            </div>
            {books.map((book) => (
               <div className="grid grid-cols-3 w-full h-[7vh] border-b border-[#dec8ac] items-center text-[#273b53] cursor-default">
                  <div className="truncate px-4" title={book.title}>
                     {book.title}
                  </div>
                  <div className="truncate px-4" title={book.author}>
                     {book.author}
                  </div>
                  <div className="truncate px-8" title={book.published_year}>
                     {book.published_year}
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}

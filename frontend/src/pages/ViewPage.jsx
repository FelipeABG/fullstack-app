export function ViewPage({ books }) {
   return (
      <div className="p-8 bg-[#fefaf3] min-h-screen">
         <h1 className="text-3xl font-bold mb-8 text-center">All Books</h1>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((book) => (
               <div className="bg-white border-2 border-[#dec8ac] rounded-lg p-6 ">
                  <h2 className="text-xl font-bold mb-2">{book.title}</h2>
                  <p>
                     <span className="font-semibold">Author:</span>{" "}
                     {book.author}
                  </p>
                  <p>
                     <span className="font-semibold">Genre:</span> {book.genre}
                  </p>
                  <p>
                     <span className="font-semibold">Year:</span>{" "}
                     {book.published_year}
                  </p>
                  <p>
                     <span className="font-semibold">Pages:</span> {book.pages}
                  </p>
               </div>
            ))}
         </div>
      </div>
   );
}

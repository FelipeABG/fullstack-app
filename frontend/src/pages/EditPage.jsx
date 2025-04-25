import { BooksList } from "../components/BooksList";
import { Input } from "../components/Input";

export function EditPage({ books, setBooks, bookEdit, setBookEdit }) {
   const createBook = async (e) => {
      e.preventDefault();
      const form = e.target;

      const newBook = {
         title: form.title.value,
         author: form.author.value,
         genre: form.genre.value,
         published_year: parseInt(form.published_year.value),
         pages: parseInt(form.pages.value),
      };

      try {
         const response = await fetch("http://localhost:8000/books", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newBook),
         });

         if (response.status === 201) {
            form.reset();
            setBooks((prev) => [...prev, newBook]);
         } else {
            const result = await response.json();
            alert(
               "Error creating book:\n" +
                  (result.errors?.join("\n") || result.error),
            );
         }
      } catch (err) {
         alert("Network or server error:\n" + err.message);
      }
   };

   const editBook = async (e) => {
      e.preventDefault();
      const form = e.target;

      const updatedBook = {
         title: form.title.value,
         author: form.author.value,
         genre: form.genre.value,
         published_year: parseInt(form.published_year.value),
         pages: parseInt(form.pages.value),
      };

      try {
         const response = await fetch(
            `http://localhost:8000/books/${bookEdit.id}`,
            {
               method: "PUT",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify(updatedBook),
            },
         );

         if (response.status === 200) {
            setBookEdit(null);

            setBooks((prevBooks) =>
               prevBooks.map((book) =>
                  book.id === bookEdit.id
                     ? { ...book, ...updatedBook, id: bookEdit.id }
                     : book,
               ),
            );
         } else {
            const result = await response.json();
            alert(
               "Error updating book:\n" +
                  (result.errors?.join("\n") || result.error),
            );
         }
      } catch (err) {
         alert("Network or server error:\n" + err.message);
      }
   };
   return (
      <div className="flex flex-row gap-[20px]">
         <BooksList
            books={books}
            setBooks={setBooks}
            setBookEdit={setBookEdit}
         />
         <div className="flex flex-1 flex-col items-center">
            <div className="flex flex-col justify-center items-center">
               <div className="text-[2rem] font-bold">Create Book</div>
               <div className="w-full h-full flex justify-center items-center">
                  <form
                     className=" w-[30vw] flex-1 rounded-lg border-2 border-[#dec8ac] overflow-scroll p-2 flex flex-col gap-1 bg-[#fefaf3]"
                     onSubmit={createBook}
                  >
                     <Input type="text" name="title" title="Title" value="" />
                     <Input type="text" name="author" title="Author" value="" />
                     <Input type="text" name="genre" title="Genre" value="" />
                     <Input
                        type="number"
                        name="published_year"
                        title="Published"
                        value=""
                     />
                     <Input type="number" name="pages" title="Pages" value="" />
                     <button
                        type="submit"
                        className="mt-auto bg-[#2a4e6c] text-white py-2 px-4 rounded hover:bg-[#1e3c53] transition"
                     >
                        Create
                     </button>
                  </form>
               </div>
            </div>
            <div className="text-[2rem] font-bold">Edit Book</div>
            <div className=" w-[30vw] flex-1 rounded-lg border-2 border-[#dec8ac] overflow-scroll p-8 flex flex-col gap-4 bg-[#fefaf3]">
               {bookEdit === null ? (
                  <p className="text-center">
                     To start editing a book, select one from the list.
                  </p>
               ) : (
                  <form
                     key={bookEdit.id}
                     className="flex flex-col gap-1 w-full h-full"
                     onSubmit={editBook}
                  >
                     <div className="grid grid-cols-2 gap-1 h-full">
                        <Input
                           type="text"
                           name="title"
                           title="Title"
                           value={bookEdit.title}
                        />
                        <Input
                           type="text"
                           name="author"
                           title="Author"
                           value={bookEdit.author}
                        />
                        <Input
                           type="text"
                           name="genre"
                           title="Genre"
                           value={bookEdit.genre}
                        />
                        <Input
                           type="number"
                           name="published_year"
                           title="Published"
                           value={bookEdit.published_year}
                        />
                        <Input
                           type="number"
                           name="pages"
                           title="Pages"
                           value={bookEdit.pages}
                        />
                        <button
                           type="submit"
                           className="bg-[#2a4e6c] text-white py-1 px-2 rounded hover:bg-[#1e3c53] col-span-2 mt-auto transition"
                        >
                           Update
                        </button>
                     </div>
                  </form>
               )}
            </div>
         </div>
      </div>
   );
}

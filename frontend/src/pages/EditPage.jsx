import { BooksList } from "../components/BooksList";
import { Input } from "../components/Input";

export function EditPage({ books, setBooks, bookEdit, setBookEdit }) {
   const handleSubmit = (e, isEdit = false) => {
      e.preventDefault();

      const form = e.target;
      const data = Object.fromEntries(new FormData(form));
      const payload = {
         title: data.title.trim(),
         author: data.author.trim(),
         genre: data.genre.trim(),
         published: Number(data.published),
         pages: Number(data.pages),
      };

      const url = isEdit
         ? `http://localhost:8000/books/${bookEdit.id}`
         : "http://localhost:8000/books";

      const method = isEdit ? "PUT" : "POST";

      fetch(url, {
         method,
         body: JSON.stringify(payload),
      })
         .then((res) =>
            res.json().then((body) => ({ status: res.status, body })),
         )
         .then(({ status, body }) => {
            if (status === 200 || status === 201) {
               form.reset();
               setBooks([]);
               if (isEdit) setBookEdit(null);
            } else if (status === 400 && body.errors) {
               alert("Validation Errors:\n" + body.errors.join("\n"));
            } else {
               alert("Unexpected error:\n" + body);
            }
         })
         .catch((err) => {
            alert("Request failed:\n" + err);
         });
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
                     onSubmit={(e) => handleSubmit(e, false)}
                  >
                     <Input type="text" name="title" title="Title" />
                     <Input type="text" name="author" title="Author" />
                     <Input type="text" name="genre" title="Genre" />
                     <Input type="number" name="published" title="Published" />
                     <Input type="number" name="pages" title="Pages" />
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
                     onSubmit={(e) => handleSubmit(e, true)}
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
                           name="published"
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

import { BooksList } from "../components/BooksList";
import { Input } from "../components/Input";

export function EditPage({ books, setBooks }) {
   return (
      <div className="flex flex-row gap-[20px]">
         <BooksList books={books} setBooks={setBooks} />
         <div className="flex flex-1 flex-col justify-center items-center">
            <div className="text-[2rem] font-bold">Edit Book</div>
            <div className="w-full h-full flex justify-center items-center">
               <form className="w-[30vw] h-[80vh] rounded-lg border-2 border-[#dec8ac] overflow-scroll p-8 flex flex-col gap-4 bg-[#fefaf3]">
                  <Input type="text" name="title" title="Title" />
                  <Input type="text" name="author" title="Author" />
                  <Input type="text" name="genre" title="Genre" />
                  <Input type="number" name="published" title="Published" />
                  <Input type="number" name="pages" title="Pages" />
                  <button
                     type="submit"
                     className="mt-auto bg-[#2a4e6c] text-white py-2 px-4 rounded hover:bg-[#1e3c53] transition"
                  >
                     Save
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
}

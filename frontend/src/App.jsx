import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ListPage } from "./pages/ListPage";
import { EditPage } from "./pages/EditPage";
import { ViewPage } from "./pages/ViewPage";

function App() {
   const [books, setBooks] = useState([]);
   const [bookEdit, setBookEdit] = useState(null);

   useEffect(() => {
      fetch("http://localhost:8000/books")
         .then((response) => {
            if (!response.ok) {
               throw new Error("Failed to fetch books.");
            }
            return response.json();
         })
         .then((response) => setBooks(response))
         .catch((err) => {
            alert("Error loading books: " + err.message);
         });
   }, [books]);

   return (
      <Router>
         <div className="w-screen h-screen bg-[#fcf4e5] text-[#453024]">
            <header className="w-screen h-[7vh] border-b border-[#dec8ac] flex justify-around align-center items-center gap-[50vw] bg-[#f2e6d1]">
               <h1 className="self-center text-[1.7rem] font-bold">
                  Felipe Augusto
               </h1>
               <div className="flex gap-[2vw] text-[1.2rem]">
                  <Link to="/" className="hover:underline font-semibold">
                     List
                  </Link>
                  <Link to="/edit" className="hover:underline font-semibold">
                     Edit
                  </Link>
                  <Link to="/view" className="hover:underline font-semibold">
                     View
                  </Link>
               </div>
            </header>
            <main className="h-[93vh]">
               <Routes>
                  <Route
                     path="/"
                     element={
                        <ListPage
                           books={books}
                           setBooks={setBooks}
                           setBookEdit={setBookEdit}
                        />
                     }
                  />
                  <Route
                     path="/edit"
                     element={
                        <EditPage
                           books={books}
                           setBooks={setBooks}
                           bookEdit={bookEdit}
                           setBookEdit={setBookEdit}
                        />
                     }
                  />
                  <Route path="/view" element={<ViewPage books={books} />} />
               </Routes>
            </main>
         </div>
      </Router>
   );
}

export default App;

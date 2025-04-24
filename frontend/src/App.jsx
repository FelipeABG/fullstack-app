import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ListPage } from "./pages/ListPage";
import { ViewPage } from "./pages/ViewPage";
import { EditPage } from "./pages/EditPage";

function App() {
   const [books, setBooks] = useState([]);

   useEffect(() => {
      fetch("http://localhost:8000/books")
         .then((response) => response.json())
         .then((response) => setBooks(response));
   }, []);

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
                     element={<ListPage books={books} setBooks={setBooks} />}
                  />
                  <Route
                     path="/edit"
                     element={<EditPage books={books} setBooks={setBooks} />}
                  />
                  <Route path="/view" element={<ViewPage />} />
               </Routes>
            </main>
         </div>
      </Router>
   );
}

export default App;

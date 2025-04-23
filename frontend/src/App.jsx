import { useState } from "react";
import { ListPage } from "./pages/ListPage";
import { ViewPage } from "./pages/ViewPage";
import { EditPage } from "./pages/EditPage";

function App() {
   let pages = [
      { name: "List", handler: ListPage },
      { name: "Edit", handler: EditPage },
      { name: "View", handler: ViewPage },
   ];

   let [page, setPage] = useState(pages[0].handler);

   let renderPage = (page) => () => {
      setPage(page);
   };

   return (
      <div className="w-screen h-screen">
         <header className="w-screen h-[7vh] border-b flex justify-around align-center items-center gap-[50vw]">
            <h1 className="self-center text-[1.7rem]">Felipe Augusto</h1>
            <div className="flex gap-[2vw] text-[1.2rem]">
               {pages.map((page) => {
                  return (
                     <button
                        className="hover:underline"
                        onClick={renderPage(page.handler)}
                     >
                        {page.name}
                     </button>
                  );
               })}
            </div>
         </header>
         <main>{page}</main>
      </div>
   );
}

export default App;

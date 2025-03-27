import ListUser from "./ListUser";
function App() {
   return (
      <div className="h-screen w-screen bg-[#eaeaea] flex flex-col">
         <header className="h-[8vh] border text-[3rem] grid grid-cols-2 ">
            <h1 className="place-self-center">CRUD Application</h1>
         </header>
         <main className="h-[92vh] w-screen grid grid-rows-2 grid-cols-2">
            <ListUser />
         </main>
      </div>
   );
}

export default App;

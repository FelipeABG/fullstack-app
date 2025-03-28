import UserList from "./UserList";
import UserCreation from "./UserCreation";
import UserEdition from "./UserEdition";
import { useState } from "react";

function App() {
   let [users, setUsers] = useState([]);
   let [editUser, setEditUser] = useState(null);

   return (
      <div className="h-screen w-screen bg-[#eaeaea] flex flex-col">
         <header className="h-[8vh] border-b text-[3rem] grid grid-cols-2 ">
            <h1 className="place-self-center">CRUD Application</h1>
         </header>
         <main className="h-[92vh] w-screen grid grid-rows-2 grid-cols-2">
            <UserList
               users={users}
               setUsers={setUsers}
               setEditUser={setEditUser}
            />
            <UserCreation setUsers={setUsers} />
            <UserEdition editUser={editUser} setEditUser={setEditUser} />
         </main>
      </div>
   );
}

export default App;

import { useEffect } from "react";
import { useState } from "react";

function App() {
   let [users, setUsers] = useState([]);

   useEffect(() => {
      fetch("http://localhost:8000/users")
         .then((response) => response.json())
         .then((users) => setUsers(users));
   }, []);

   return (
      <div className="h-screen w-screen flex flex-col items-center justify-center">
         {users.map((user) => {
            return <div>{user.name}</div>;
         })}
      </div>
   );
}

export default App;

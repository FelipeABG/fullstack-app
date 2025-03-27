import { useState } from "react";
import { useEffect } from "react";

export default function ListUser() {
   let [users, setUsers] = useState([]);

   useEffect(() => {
      fetch("http://localhost:8000/users")
         .then((response) => response.json())
         .then((users) => setUsers(users));
   }, [users]);

   let deleteUser = (id) => () => {
      fetch(`http://localhost:8000/users/${id}`, {
         method: "DELETE",
      }).then((response) => {
         if (response.status === 200) {
            setUsers((prevUsers) => prevUsers.filter((user) => user.id != id));
         }
      });
   };

   return (
      <div className="h-[95%] w-[75%] place-self-center rounded-md row-span-2 shadow-md bg-[#f7f7f7] cursor-default overflow-scroll">
         <div className="h-[8%] border-b grid grid-cols-4">
            <div className="place-self-center font-bold underline">ID</div>
            <div className="place-self-center font-bold underline">NAME</div>
            <div className="place-self-center font-bold underline">EMAIL</div>
            <div className="place-self-center font-bold underline">DELETE</div>
         </div>
         {users.map((user) => {
            return <UserRow key={user.id} user={user} handler={deleteUser} />;
         })}
      </div>
   );
}

function UserRow({ user, handler }) {
   return (
      <div className="h-[8%] border-b grid grid-cols-4 hover:bg-[#cccccc] gap-[5px]">
         <div className="place-self-center">{user.id}</div>
         <div className="place-self-center">{user.name}</div>
         <div className="place-self-center ">{user.email}</div>
         <button
            type="button"
            className="place-self-center w-[70%] h-[60%] border rounded-md bg-[#db3445] text-white hover:bg-[#a70000]"
            onClick={handler(user.id)}
         >
            Delete
         </button>
      </div>
   );
}

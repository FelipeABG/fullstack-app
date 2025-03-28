import { useEffect } from "react";

export default function UserList({ users, setUsers, setEditUser }) {
   useEffect(() => {
      fetch("http://localhost:8000/users")
         .then((response) => response.json())
         .then((users) => setUsers(users));
   }, [users, setUsers]);

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
      <div className="h-[95%] w-[75%] place-self-center rounded-md shadow-md row-span-2 bg-[#f7f7f7] cursor-default overflow-scroll">
         <div className="h-[8%] border-b grid grid-cols-4">
            <UserPropsTitles />
         </div>
         {users.map((user) => {
            return (
               <UserRow
                  key={user.id}
                  user={user}
                  handler={deleteUser}
                  setEditUser={setEditUser}
               />
            );
         })}
      </div>
   );
}

function UserPropsTitles() {
   return ["ID", "NAME", "EMAIl", "DELETE"].map((title) => {
      return (
         <div key={title} className="place-self-center font-bold underline">
            {title}
         </div>
      );
   });
}

function UserRow({ user, handler, setEditUser }) {
   let handleUserEdit = (user) => () => {
      setEditUser(user);
   };

   return (
      <div
         className="h-[8%] border-b grid grid-cols-4 hover:bg-[#cccccc] gap-[5px]"
         onClick={handleUserEdit(user)}
      >
         <div className="place-self-center">{user.id}</div>
         <div className="place-self-center w-full truncate">{user.name}</div>
         <div className="place-self-center w-full truncate">{user.email}</div>
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

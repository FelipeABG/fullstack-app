import FormsInput from "./FormsInput";

export default function UserEdition({ editUser, setEditUser }) {
   if (!editUser) {
      return (
         <div className="flex items-center justify-center place-self-center shadow-md rounded-md w-[85%] h-[90%] bg-[#f7f7f7]">
            <p className="text-[1.5rem]">
               Select a user from the list to start editing it...
            </p>
         </div>
      );
   }

   let editUserHandler = () => {
      let form = document.querySelector(".user-edit-form");
      let data = new FormData(form);
      data.append("id", editUser.id);

      fetch("http://localhost:8000/users", {
         method: "PUT",
         body: data,
      }).then((response) => {
         if (response.status === 200) {
            setEditUser(null);
         }
      });
   };

   return (
      <div className="w-[85%] h-[90%] flex flex-col bg-[#f7f7f7] shadow-md rounded-md col-span-1 place-self-center">
         <h1 className="h-[13%] text-[3rem] cursor-default place-self-center">
            Edit user
         </h1>
         <form className="user-edit-form flex flex-col items-center  place-self-center w-[70%] h-[70%] pt-[50px] gap-[15px]">
            <FormsInput
               inputs={[
                  { name: "name", placeholder: editUser.name },
                  { name: "email", placeholder: editUser.email },
               ]}
            />
            <button
               className="border w-[250px] h-[80px] rounded-md p-10px bg-[#615fff] text-white hover:bg-[#4D4CCC]"
               type="button"
               onClick={editUserHandler}
            >
               Update
            </button>
         </form>
      </div>
   );
}

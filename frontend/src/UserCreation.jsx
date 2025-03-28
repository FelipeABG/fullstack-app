import FormsInput from "./FormsInput";

export default function UserCreation({ setUsers }) {
   let createUser = () => {
      let form = document.querySelector(".user-form");
      let data = new FormData(form);

      fetch("http://localhost:8000/users", {
         method: "POST",
         body: data,
      }).then((response) => {
         if (response.status === 200) {
            setUsers([]);
         }
      });
   };

   return (
      <div className="w-[85%] h-[90%] flex flex-col bg-[#f7f7f7] shadow-md rounded-md col-span-1 place-self-center">
         <h1 className="h-[13%] text-[3rem] cursor-default place-self-center">
            Add new User
         </h1>
         <form className="user-form flex flex-col items-center  place-self-center w-[70%] h-[70%] pt-[50px] gap-[15px]">
            <FormsInput
               inputs={[
                  { name: "name", placeholder: "E.g John" },
                  { name: "email", placeholder: "E.g john@gmail.com" },
               ]}
            />
            <button
               className="border w-[250px] h-[80px] rounded-md p-10px bg-[#1FAF1F] text-white hover:bg-[#178017]"
               type="button"
               onClick={createUser}
            >
               Create
            </button>
         </form>
      </div>
   );
}

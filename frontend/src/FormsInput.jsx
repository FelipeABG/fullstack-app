export default function FormsInput({ inputs }) {
   function capitalize(val) {
      return String(val).charAt(0).toUpperCase() + String(val).slice(1);
   }

   return inputs.map((input) => {
      return (
         <div key={input.name}>
            <p className="text-[1.5rem]">{capitalize(input.name)}:</p>
            <input
               className="border w-[300px] h-[30px] p-[10px]"
               type="text"
               name={input.name}
               placeholder={input.placeholder}
            />
         </div>
      );
   });
}

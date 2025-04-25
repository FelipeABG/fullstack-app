export function Input({ type, name, title, value }) {
   return (
      <>
         <label className="text-md font-semibold">{title}</label>
         <input
            required
            type={type}
            name={name}
            className="border border-[#d2b48c] rounded px-2 py-1 bg-white"
            defaultValue={value}
         />
      </>
   );
}

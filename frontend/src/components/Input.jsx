export function Input({ type, name, title }) {
   return (
      <>
         <label className="text-lg font-semibold">{title}</label>
         <input
            required
            type={type}
            name={name}
            className="border border-[#d2b48c] rounded px-4 py-2 bg-white"
         />
      </>
   );
}

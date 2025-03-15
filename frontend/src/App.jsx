import { useEffect, useState } from "react";

export default function App() {
  let [data, set_data] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => set_data(data));
  }, []);

  return (
    <div>
      {data.map((user) => (
        <p>{user.name}</p>
      ))}
    </div>
  );
}

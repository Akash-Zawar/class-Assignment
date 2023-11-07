import { useEffect, useState } from "react";

const APIWithUseEffect = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!search) {
      return;
    }
    console.log("Search Keyword: ", search);

    fetch(`https://api.github.com/users/${search}`)
      .then((data) => data.json())
      .then((data) => console.log("Data: ", data))
      .catch((err) => console.log("Err: ", err));
  }, [search]);

  return (
    <div>
      <p>Searching for {search}</p>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default APIWithUseEffect;

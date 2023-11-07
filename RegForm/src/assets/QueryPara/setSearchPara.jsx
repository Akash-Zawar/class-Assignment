import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
const SetSearchView = () => {
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    let searchValue = searchParams.get("query");
    setSearch(searchValue);
  }, []);

  const onSearch = () => {
    // Write a logic to search & to add in Query params
    setSearchParams({ query: search });
  };
  return (
    <div>
      <p>Searching for: {search}</p>
      <input
        value={search}
        type="search"
        placeholder="Search here"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SetSearchView;

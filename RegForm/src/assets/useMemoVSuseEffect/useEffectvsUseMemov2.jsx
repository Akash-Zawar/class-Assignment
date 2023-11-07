import { useEffect, useMemo, useState } from "react";

export const FormDay17 = () => {
  const [userName, setUserName] = useState("");
  const [capitaliseName, setCapitaliseName] = useState("");

  useEffect(() => {
    setCapitaliseName(userName.toUpperCase());
  }, [userName]);

  console.log("Re-Render: ", capitaliseName);

  return (
    <div>
      <p>Name: {capitaliseName}</p>
      <input type="text" onChange={(e) => setUserName(e.target.value)} />
    </div>
  );
};

export const FormDay17V2 = () => {
  const [userName, setUserName] = useState("");

  const capitaliseName = useMemo(() => {
    return userName.toUpperCase();
  }, [userName]);

  console.log("Re-Render: ", capitaliseName);

  return (
    <div>
      <p>Name: {capitaliseName}</p>
      <input type="text" onChange={(e) => setUserName(e.target.value)} />
    </div>
  );
};

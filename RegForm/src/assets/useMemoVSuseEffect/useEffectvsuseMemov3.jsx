import { useEffect, useState } from "react";

export const CharOccWithUseEffect = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    let p = {};
    for (let i = 0; i < name.length; i++) {
      if (p.hasOwnProperty(name[i])) {
        p[name[i]]++;
      } else {
        p[name[i]] = 1;
      }
    }
    console.log(p);
  }, [name]);

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <p>Name: {name}</p>
    </div>
  );
};

import { createContext, useState, useEffect } from "react";

const NoteContext = createContext({});

const DataProvider = ({ children }: { children: any }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/notes")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <NoteContext.Provider value={{ data, isLoading }}>
      {children}
    </NoteContext.Provider>
  );
};

export { NoteContext, DataProvider };

import React, { createContext, useState } from "react";
import axios from "axios";


export const TransportContext = createContext();

export const TransportProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const searchTransport = async (source, destination) => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/transport/search?origin=${source}&destination=${destination}`,
      );

      const data = res.data.data;

      console.log("Context API Data:", data);

      setResults(data);

      return data; 
    } catch (error) {
      console.error("Search Error:", error);
      return [];
    }
  };

  return (
    <TransportContext.Provider value={{ results, setResults, searchTransport }}>
      {children}
    </TransportContext.Provider>
  );
};

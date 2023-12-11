// YourReactComponent.jsx
import React, { useState, useEffect } from "react";
import { users } from "@vercel/postgres";

// const client = await db.connect();
// await client.sql`SELECT 1`;

const YourReactComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("'http://localhost:3001/api/data");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Your Data:</h1>
      {users.id} {users.name}
    </div>
  );
};

export default YourReactComponent;

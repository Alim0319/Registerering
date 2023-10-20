import { useEffect, useState } from "react";

const apiBaseUrl = "http://localhost:3500"; // Node.js-serverens URL

const Api = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`${apiBaseUrl}/api/data`)
      .then((response) => response.json())
      .then((data) => {
        // Handle the data here
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []); // The empty dependency array ensures the effect runs once

  return (
    <div>
      <h1>My Component</h1>
      <button onClick={fetchData}>Fetch Data</button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Api;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=4")
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container">
      {photos.map((photo) => (
        <div className="card" key={photo.id}>
          <div className="card-content">
            <img
              src={`https://picsum.photos/seed/${photo.id}/600/600`}
              alt={photo.title}
            />
            <p>{photo.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;

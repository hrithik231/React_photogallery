import "./App.css";
import { useState, useEffect } from "react";
export default function Cars() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    newdata();
  }, []);
  const newdata = () => {
    fetch(
      "https://api.unsplash.com/search/photos/?client_id=uzs3ntGDSswLgjEwEp_XGlhz-iLbkJlOJ9FSPyY-Vq8&query=cars"
    )
      .then((response) => response.json())
      .then((data) => setdata(data.results));
  };
  return data.map((item, index) => {
    return (
      <>
        <div className="upperflower">
          <div className="flower">
            <img
              src={item.urls.raw}
              alt="error"
              width="50%"
              className="img11"
            ></img>
          </div>
        </div>
      </>
    );
  });
}

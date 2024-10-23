import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./components/Card";

function App() {
  const [productData, setProductData] = useState();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
        // console.log("Product Data: ", data);
      });
  }, []);

  return (
    <>
      {!productData ? (
        <h1>Loading...</h1>
      ) : (
        <div className="grid lg:grid-cols-4 gap-8 p-8 sm:grid-cols-2 bg-slate-600">
          {productData.products.map((d) => {
            return (
              <Card
                id={d.id}
                title={d.title}
                price={d.price}
                rating={d.rating}
                description={d.description}
                img={d.thumbnail}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default App;

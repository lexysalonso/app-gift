import React from "react";
//import { useState, useEffect } from "react";
import useGifts from "./hooks/useGifts";

//let API = "https://catfact.ninja/fact";
//let API_GIFT = "3YbM5PpXjPyF51jK8yk6CwMjv8Ilt6EL";
//let search = "hamburger";

const App = () => {
  const { facts, gift } = useGifts();

  console.log("Componente App");
  return (
    <>
      <div>
        <p style={{ textAlign: "center" }}>{facts.fact}</p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "2rem",
          maxWidth: "1000px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {gift && gift.length > 0 ? (
          gift.map((gif) => (
            <article key={gif.id}>
              <strong style={{ textAlign: "center" }}>{gif.title}</strong>
              <img
                style={{ height: "200px", width: "250px" }}
                src={gif.images.original.url}
                alt="vxcv"
              />
            </article>
          ))
        ) : (
          <strong>No Existe GIf para el termino de busqueda !!!</strong>
        )}
      </div>
    </>
  );
};

export default App;

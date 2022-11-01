import { useState, useEffect } from "react";

let API = process.env.REACT_APP_API;
let API_GIFT = "3YbM5PpXjPyF51jK8yk6CwMjv8Ilt6EL";

const useGifts = () => {
  console.log("useGisfts");
  const [facts, setfacts] = useState({});
  const [gift, setGift] = useState([]);

  useEffect(() => {
    console.log("Se Monta");
    const getData = async () => {
      try {
        let result = await fetch(API, {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        });
        let data = await result.json();
        console.log("ver data", data);
        if (!result.ok)
          throw new Error({
            status: result.status,
            statusText: result.statusText,
          });
        setfacts(data);
      } catch (error) {
        console.log("ver error", error);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    console.log("Fase de actulizacion");
    const getGift = async () => {
      try {
        let text = facts?.fact?.split(" ", 3).join("");
        console.log("Text", text);
        let result = await fetch(
          `https://api.giphy.com/v1/gifs/search?q=${text}&api_key=${API_GIFT}`
        );
        let data = await result.json();
        setGift(data.data);
        if (!result.ok)
          // eslint-disable-next-line no-throw-literal
          throw {
            status: result.status,
            statustext: result.statusTxt
              ? result.statusTxt
              : "Ocurrio un error",
          };
        console.log("ver result", data);
      } catch (err) {
        console.log("ver Error de gift", err);
      }
    };

    getGift();
  }, [facts]);
  return {
    facts,
    gift,
  };
};

export default useGifts;

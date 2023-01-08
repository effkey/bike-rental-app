import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ShoppingCart } from "../components/ShoppingCart";

const FetchContext = createContext({});

export function UseFetchContext() {
  return useContext(FetchContext);
}

export function FetchProvider({ children }) {
  const URL = `http://localhost:8000`;

  const [items, setItems] = useState([]);
  const [page, setPage] = useState(`${URL}/product`);
  const [type, setType] = useState([]);
  const [typePage, setTypePage] = useState([]);
  useEffect(() => {
    if (page === "Sortuj malejąco!" || page === "Sortuj rosnąco!") {
    } else {
      fetch(page)
        .then((response) => response.json())
        .then((data) => setItems(data));
    }
  }, [page]);

  // Sortowanie produktów po cenie malejąco
  //   const handleSortAsc = () => {
  //     setPage("http://localhost:8000/product?_sort=price&_order=asc");
  //     };
  const handleSortAsc = (items) => {
    setPage("Sortuj malejąco!");
    setItems(
      items.sort((a, b) => {
        return b.price - a.price;
      })
    );
    console.log(items);
  };

  // Sortowanie produktów po cenie rosnąco
  //   const handleSortDesc = () => {
  //     setPage("http://localhost:8000/product?_sort=price&_order=desc");
  //     };
  const handleSortDesc = (items) => {
    setPage("Sortuj rosnąco!");
    setItems(
      items.sort((a, b) => {
        return a.price - b.price;
      })
    );
    console.log(items);
  };

  const resetData = () => {
    setPage(`${URL}/product`);
  };

  const getProductTypes = (type) => {
    setPage(`${URL}/product?type=${type}`);
  };

  // Potrzebne do pobierania typów
  useEffect(() => {
    fetch(`${URL}/type`)
      .then((response) => response.json())
      .then((data) => setType(data))
      .catch((error) => console.log("errrrror", error));
  }, []);

  const getAllTypes = () => {};
  //   const getItemID = (id) => {
  //     setPage(`http://localhost:8000/product/${id}`);
  //     return items;
  //   };

  //   const [itemsDetails, setItemsDetails] = useState([]);
  //   const [itemID, setItemID] = useState([]);

  // //   let getItemID = (id) => {
  // //     return itemsDetails;
  // //   };

  //   useEffect(() => {
  //     console.log("page kurwa", page);
  //     fetch(`http://localhost:8000/product/${itemID}`)
  //       .then((response) => response.json())
  //       .then((data) => setItemsDetails(data))
  //       .catch((error) => console.log("errrrror kuwa", error));
  //   }, [itemID]);
  //   const getItemsForDetails = () => {};
  return (
    <FetchContext.Provider
      value={{
        handleSortAsc,
        handleSortDesc,
        resetData,
        items,
        type,
        getProductTypes,
      }}
    >
      {children}
    </FetchContext.Provider>
  );
}

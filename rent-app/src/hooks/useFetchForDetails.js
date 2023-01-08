// https://www.youtube.com/watch?v=c-5VXl8yPQA&ab_channel=TheNetNinja
import { useEffect, useState } from "react";

export function useFetchForDetails(id) {
  const [item, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/product/${id}`)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);
  return item;
}

export default useFetchForDetails;

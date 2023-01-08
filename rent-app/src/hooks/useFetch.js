// // https://www.youtube.com/watch?v=c-5VXl8yPQA&ab_channel=TheNetNinja
// import { useCallback, useEffect, useState } from "react";
// import axios from "axios";
// export function useFetch() {
//   // const [items, setItems] = useState([]);
//   // const [buttonstate, setButtonState] = useState([false]);

//   // // useEffect(() => {
//   // //   fetch("http://localhost:8000/product")
//   // //     .then((response) => response.json())
//   // //     .then((data) => setItems(data));
//   // // }, []);

//   // // useEffect(() => {
//   // //   fetch("http://localhost:8000/product")
//   // //     .then((res) => {
//   // //       return res.json();
//   // //     })
//   // //     .then((data) => {
//   // //       console.log(data);
//   // //       setItems(data);
//   // //     });
//   // // });

//   // // useEffect(() => {
//   // //   async function fetchData() {
//   // //     const res = await fetch("http://localhost:8000/product");
//   // //     const data = await res.json();
//   // //     setItems(data);
//   // //     console.log(data);
//   // //   }
//   // //   fetchData();
//   // // }, []);

//   // //   function handleClick() {
//   // //     setItems(items.sort((a, b) => a.price - b.price));
//   // //     console.log(items);
//   // //   }

//   // //   async function fetchData() {
//   // //     const res = await fetch("http://localhost:8000/product");
//   // //     const data = await res.json();
//   // //     setItems(data);
//   // //     console.log(data);
//   // //   }
//   // //   useEffect(() => {
//   // //     fetchData();
//   // //   }, []);
//   // //   return { items, handleClick };
//   // // }

//   // const loadUsersData = async () => {
//   //   return await axios
//   //     .get("http://localhost:8000/product")
//   //     .then((response) => setItems(response.data))
//   //     .catch((err) => console.log(err));
//   // };

//   // console.log("Data", items);
//   // console.log("button", buttonstate);
//   // const handleSort = async () => {
//   //   return await axios
//   //     .get("http://localhost:8000/product?_sort=price&_order=asc")
//   //     .then((response) => {
//   //       // setItems(response.data);
//   //       setButtonState(response.data);
//   //       console.log("butt", buttonstate);
//   //     })
//   //     .catch((err) => console.log(err));
//   // };
//   // useEffect(() => {
//   //   loadUsersData();
//   // }, [buttonstate]);

//   const [items, setItems] = useState([]);
//   const [page, setPage] = useState(
//     "http://localhost:8000/product?_sort=price&_order=asc"
//   );

//   useEffect(() => {
//     if (page === "http://localhost:8000/product?_sort=price&_order=asc") {
//       console.log("page kurwa", page);
//       fetch(page)
//         .then((response) => response.json())
//         .then((data) => setItems(data))
//         .catch((error) => console.log("errrrror kuwa", error));
//       console.log("kupa");
//     }
//     if (page === "http://localhost:8000/product") {
//       console.log("XDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD");
//       fetch(page)
//         .then((response) => response.json())
//         .then((data) => setItems(data))
//         .catch((error) => console.log("errrrror kuwa", error));
//     }
//   }, [page]);

//   // console.log("page", page);
//   const handleSort = () => {
//     setPage("http://localhost:8000/product");
//   };

//   const loadData = () => {
//     fetch("http://localhost:8000/product")
//       .then((response) => response.json())
//       .then((data) => setItems(data));
//   };
//   console.log(items);

//   return { items, handleSort };
// }
// export default useFetch;

import { ProductBox } from "../../components/Product-box";
import { ProductHeader } from "./Products-header";
import React from "react";
import { UseFetchContext } from "../../hooks/UseFetchContext";

export function Home() {
  // let { items } = useFetch();
  const { items } = UseFetchContext();

  // console.log(items);
  return (
    <>
      <ProductHeader></ProductHeader>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <ProductBox {...item} />
        </React.Fragment>
      ))}
    </>
  );
}

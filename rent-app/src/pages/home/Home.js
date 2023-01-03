import { ProductBox } from "../../components/Product-box";
import { ProductHeader } from "./Products-header";

import storeItems from "../../data/items.json";
import React from "react";

export function Home() {
  return (
    <>
      <ProductHeader></ProductHeader>
      {storeItems.product.map((item) => (
        <React.Fragment key={item.id}>
          <ProductBox {...item} />
        </React.Fragment>
      ))}
    </>
  );
}

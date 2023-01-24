import { Button, Stack } from "react-bootstrap";

import { useShoppingCart } from "../context/ShoppingCartContext";

import { UseFetchContext } from "../hooks/UseFetchContext";
import PropTypes from 'prop-types';

// CartItem.propTypes = { id: PropTypes.number, quantity: PropTypes.number };

export function CartItem({ id, quantity }) {
  const { useFetchForDetails } = UseFetchContext();
  const { removeFromCart } = useShoppingCart();
  //   const item = storeItems.product.find((i) => i.id === id);
  //   if (item == null) return null;

  let item = useFetchForDetails(id);
  console.log(item, "itemik");

  //   let item = items.map((i) => i.id === id);
  //   console.log(item);
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.image}
        alt="rower"
        style={{ width: "115px", height: "65px", objectFit: "cover" }}
      ></img>

      <div className="me-auto">
        <div>
          <span className="text-1xl"> {item.title + " "}</span>
          {quantity > 1 && (
            <span className="text-2xl ml-3">x{quantity}</span>
          )}{" "}
        </div>
      </div>
      <div className=" mr-3">
        <span className="text-lg"> {item.price + " zł"} </span>
      </div>
      <div className="text-lg mr-3">
        {item.price * quantity}
        {"zł"}
      </div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
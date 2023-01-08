import { Button, Stack } from "react-bootstrap";
import { PropTypes } from "react-bootstrap/esm/Image";
import { useShoppingCart } from "../context/ShoppingCartContext";
import useFetch from "../hooks/useFetch";
import storeItems from "../data/items.json";
import useFetchForDetails from "../hooks/useFetchForDetails";

// CartItem.propTypes = { id: PropTypes.number, quantity: PropTypes.number };

export function CartItem({ id, quantity }) {
  const { removeFromCart } = useShoppingCart();
  //   const item = storeItems.product.find((i) => i.id === id);
  //   if (item == null) return null;

  let item = useFetchForDetails(id);
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
      {/* <h1>{quantity}</h1>
      <h2>{item.price * quantity}</h2> */}
    </Stack>
  );
}

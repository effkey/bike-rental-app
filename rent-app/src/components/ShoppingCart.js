import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import PropTypes from "prop-types";
import { CartItem } from "./CartItem";
import useFetchForDetails from "../hooks/useFetchForDetails";
import useFetch from "../śmieci/useFetch";
import { UseFetchContext } from "../hooks/UseFetchContext";

export function ShoppingCart({ isOpen }) {
  const { closeCart, cartItems, cartQuantity } = useShoppingCart();

  // nie wiem czy to dobrze
  ShoppingCart.propTypes = { isOpen: PropTypes.bool };
  ////

  const { items } = UseFetchContext();
  return (
    <Offcanvas
      style={{ width: "760px" }}
      show={isOpen}
      onHide={closeCart}
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title> Liczba przedmiotów: {cartQuantity}</Offcanvas.Title>
      </Offcanvas.Header>
      <div className="text-center mr-2 text-lg">
        <p>Nazwa produktu / Cena sztuki / Ilość * cena sztuki</p>
      </div>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Suma:{" "}
            {cartItems.reduce((total, cartItem) => {
              const item = items.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)}{" "}
            {" zł"}
          </div>
          <Button className="w-40 h-30 float-right">Kup</Button>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

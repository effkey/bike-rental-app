import { Button, Card, Nav, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { UseFetchContext } from "../hooks/UseFetchContext";
export function ProductBox({
  id,
  title,
  price,
  type,
  description,
  image,
  size,
  color,
  productCount,
}) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const { deleteProduct } = UseFetchContext();
  const quantity = getItemQuantity(id);

  function handleClick(id) {
    deleteProduct(id);
    removeFromCart(id);
  }

  return (
    <Card className="mx-auto max-w-7xl bg-white shadow-sm  mb-4 ">
      <Card.Body className="flex items-center">
        <Table>
          <tbody>
            <tr className="flex justify-between">
              <th className="flex items-center justify-between">
                <Card.Img src={image} alt="rower" />
              </th>
              <th>
                <div className="ml-20 mb-5 text-base justify-between">
                  <Card.Title> {title}</Card.Title>
                  <Card.Text> {description}</Card.Text>
                  <Card.Text> Typ : {type} </Card.Text>
                  <Card.Text> Ilość: {productCount}</Card.Text>
                </div>
              </th>
              <th>
                <div className="ml-20 justify-between">
                  <span className="flex justify-end text-red-400 mb-5 mr-5 text-3xl">
                    {price + " zł/dzień"}
                  </span>
                  <div className="mb-5">
                    {/* todo routing do szczegółów */}
                    <Button variant="danger">
                      <Nav.Link to={`/details/${id}`} as={NavLink}>
                        Szczegóły
                      </Nav.Link>
                    </Button>
                  </div>
                  {quantity === 0 ? (
                    <Button
                      variant="danger"
                      onClick={() => increaseCartQuantity(id)}
                    >
                      Dodaj do koszyka
                    </Button>
                  ) : (
                    <div
                      className="d-flex align-items-center flex-column"
                      style={{ gap: ".5rem" }}
                    >
                      <Button onClick={() => increaseCartQuantity(id)}>
                        +
                      </Button>

                      <div>
                        <span className="fs-3">{quantity} </span> w koszyku
                      </div>
                      <div
                        className="d-flex align-items-center justify-content-center"
                        style={{ gap: ".5rem" }}
                      >
                        <Button onClick={() => decreaseCartQuantity(id)}>
                          -
                        </Button>
                      </div>
                      <div>
                        <Button
                          onClick={() => removeFromCart(id)}
                          variant="danger"
                          size="sm"
                        >
                          Usuń w koszyku
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </th>
              <th>
                <Button
                  className=" ml-20 h-100"
                  variant="danger"
                  onClick={() => handleClick(id)}
                >
                  Usuń przedmiot
                </Button>
              </th>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

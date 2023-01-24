import { Button, Card, Nav, Table } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";
import { ProductHeader } from "../home/Products-header";

import { useShoppingCart } from "../../context/ShoppingCartContext";
import { UseFetchContext } from "../../hooks/UseFetchContext";

export function Details() {
  // // Routing z parametrem
  const { useFetchForDetails } = UseFetchContext();
  let { id } = useParams();
  id = Number(id);
  let product = useFetchForDetails(id);
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <>
      <ProductHeader></ProductHeader>
      <Card className="mx-auto max-w-7xl bg-white shadow-sm mt-6">
        <Card.Body className="flex items-center">
          <Table>
            <tbody>
              <tr className="flex justify-between">
                <th className="flex items-center justify-between">
                  <Card.Img src={product.image} alt="rower" />
                </th>
                <th>
                  <div className="ml-20 mb-5 text-base ">
                    <Card.Title> {product.title}</Card.Title>
                    <Card.Text> {product.description}</Card.Text>
                    <Card.Text> Typ : {product.type} </Card.Text>
                    <Card.Text> Ilość: {product.productCount}</Card.Text>
                  </div>
                </th>
                <th>
                  <div className="ml-20 justify-between">
                    <div className="mb-5">
                      {/* todo routing do szczegółów */}
                      <Button variant="danger">
                        <Nav.Link to={`/details/${id}/images`} as={NavLink}>
                          Zobacz więcej zdjęć
                        </Nav.Link>
                      </Button>
                    </div>
                    <div className="mb-5">
                      {/* todo routing do szczegółów */}
                      <Button variant="danger">
                        <Nav.Link to={`/home`} as={NavLink}>
                          Wróć do sklepu
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
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
}

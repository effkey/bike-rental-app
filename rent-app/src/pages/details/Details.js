import { Button, Card, Nav, Table } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";
import storeItems from "../../data/items.json";
import { ProductHeader } from "../home/Products-header";
export function Details() {
  // Routing z parametrem
  const { id } = useParams();
  let liczba = Number(id);
  const product = storeItems.product.find((p) => p.id === liczba);
  // console.log(product);
  return (
    <>
      <ProductHeader></ProductHeader>
      <Card className="mx-auto max-w-7xl bg-white shadow-sm mt-6">
        <Card.Body className="flex items-center">
          <Table>
            <div className="flex justify-between">
              <th className="flex items-center">
                <Card.Img src={product.image} alt="rower" />
              </th>
              <th>
                <div className="ml-20 mb-5 text-base">
                  <Card.Title> {product.title}</Card.Title>
                  <Card.Text> Opis: {product.description}</Card.Text>
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
                  <Button variant="danger">Dodaj do koszyka</Button>
                </div>
              </th>
            </div>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
}

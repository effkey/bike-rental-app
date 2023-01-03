import { Button, Card, Nav, Table } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";
import storeItems from "../../data/items.json";
import { ProductHeader } from "../home/Products-header";
export function Images() {
  // wykorzystanie dwóch zmiennych właściwości routingu
  const { id } = useParams();
  let liczba = Number(id);
  const product = storeItems.product.find((p) => p.id === liczba);
  // console.log(product);
  const listItems = product.morephoto.map((item) => (
    <Card.Img src={item} alt="rower" className="w-100 h-50" />
  ));

  return (
    <>
      <ProductHeader></ProductHeader>
      <Card className="mx-auto max-w-7xl bg-white shadow-sm mt-6">
        <Card.Body className="flex items-center">
          <Table>
            <div className="flex justify-between">
              <th className="flex items-center">{listItems}</th>
              <th>
                <div className="ml-20 justify-between">
                  <Button variant="danger">
                    <Nav.Link to={`/details/${id}`} as={NavLink}>
                      Wróć do szczegółów
                    </Nav.Link>
                  </Button>
                </div>
              </th>
            </div>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
}

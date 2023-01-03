import { Button, Card, Nav, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
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
  return (
    <Card className="mx-auto max-w-7xl bg-white shadow-sm mt-6">
      <Card.Body className="flex items-center">
        <Table>
          <div className="flex justify-between">
            <th className="flex items-center justify-between">
              <Card.Img src={image} alt="rower" />
            </th>
            <th>
              <div className="ml-20 mb-5 text-base justify-between">
                <Card.Title> {title}</Card.Title>
                <Card.Text> Opis: {description}</Card.Text>
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
                <Button variant="danger">Dodaj do koszyka</Button>
              </div>
            </th>
          </div>
        </Table>
      </Card.Body>
    </Card>
  );
}

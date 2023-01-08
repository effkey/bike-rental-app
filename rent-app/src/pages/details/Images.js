import { Button, Card, Carousel, Nav, Table } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";
import { ProductHeader } from "../home/Products-header";
import { useFetchForDetails } from "../../hooks/useFetchForDetails";

export function Images() {
  // wykorzystanie dwóch zmiennych właściwości routingu
  const { id } = useParams();
  let product = useFetchForDetails(id);

  const listItems = product.morephoto?.map((item) => (
    <Carousel.Item className="d-flex justify-content-center">
      <img
        width={"700px"}
        height={"100px"}
        key={item.id}
        src={item}
        alt="rower"
      />
    </Carousel.Item>
  ));

  return (
    <>
      <ProductHeader></ProductHeader>
      <Card className="mx-auto max-w-7xl bg-white shadow-sm mt-6">
        <Card.Body className="flex items-center">
          <Table>
            <th key={listItems}>
              <Carousel fade className="w-70" variant="dark">
                {listItems}
              </Carousel>
            </th>
          </Table>
          <div className="ml-20 justify-between">
            <Button variant="danger">
              <Nav.Link to={`/details/${id}`} as={NavLink}>
                Wróć do szczegółów
              </Nav.Link>
            </Button>

            <div className="mt-10">
              {/* todo routing do szczegółów */}
              <Button variant="danger">
                <Nav.Link to={`/home`} as={NavLink}>
                  Wróć do sklepu
                </Nav.Link>
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

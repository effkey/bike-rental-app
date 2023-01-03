import { Button, Card, Dropdown, DropdownButton } from "react-bootstrap";
export function ProductHeader() {
  return (
    <Card className="mx-auto max-w-7xl bg-white shadow-sm mb-4">
      <Card.Body>
        <div className="flex items-center ">
          <DropdownButton variant="outline" title="Sortuj po cenie">
            {/* todo zrobić filtorwanie po typie */}
            <Dropdown.ItemText>Kuba</Dropdown.ItemText>
          </DropdownButton>
          {/* todo zrobić sortowanie po cenie */}
          <DropdownButton
            className="pl-2"
            variant="outline"
            title="Filtruj po typie"
          >
            {/* todo zrobić filtorwanie po typie */}
            <Dropdown.ItemText>Kuba</Dropdown.ItemText>
          </DropdownButton>
          <Button className="pl-2" variant="outline">
            {" "}
            Wyczyść
          </Button>
          {/* todo zrobić czyszczenie */}
        </div>
      </Card.Body>
    </Card>
  );
}

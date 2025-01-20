import Form from 'react-bootstrap/Form';

function ContactComponent() {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Imie i nazwisko: </Form.Label>
        <Form.Control type="textarea" placeholder="Imie i nazwisko" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Adres email:</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Treść wiadomości:</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  );
}

export default ContactComponent;
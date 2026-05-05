import { Container, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container id="contact" className="my-5 py-5 text-center">
      <h2 className="section-title">Get In Touch</h2>
      <p>Feel free to reach out for collaborations or project inquiries.</p>
      <div className="mt-4">
        <Button variant="outline-danger" className="mx-2" href="mailto:email@example.com">
          Email Me
        </Button>
        <Button variant="outline-danger" className="mx-2" href="https://github.com">
          GitHub
        </Button>
      </div>
    </Container>
  );
};

export default Contact;
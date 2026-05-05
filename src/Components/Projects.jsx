import { Container, Row, Col, Card } from 'react-bootstrap';

const Projects = () => {
  return (
    <Container id="projects" className="my-5">
      <h2 className="section-title">My Assignments</h2>
      <Row>
        <Col md={6}>
          <Card className="project-card">
            <Card.Body>
              <Card.Title>Jester's Hat Secure Vault</Card.Title>
              <Card.Text>
                Cybersecurity project using Python and AES encryption for secure file storage.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="project-card">
            <Card.Body>
              <Card.Title>Fitness King Database</Card.Title>
              <Card.Text>
                Database design project using MySQL and EER diagrams for a gym business.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
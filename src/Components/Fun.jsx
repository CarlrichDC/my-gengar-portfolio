import { Container, Alert } from 'react-bootstrap';

const Fun = () => {
  return (
    <Container className="my-5">
      <h2 className="section-title">Something Fun!</h2>
      <Alert variant="danger" style={{backgroundColor: '#7a5b9f', color: 'white', border: 'none'}}>
        <h4>Gengar's Hobbies</h4>
        <ul>
          <li>Powerlifting & Fitness Training</li>
          <li>Competitive Gaming (Valorant & Apex Legends)</li>
          <li>Building Technical Minecraft Redstone</li>
        </ul>
      </Alert>
    </Container>
  );
};

export default Fun;
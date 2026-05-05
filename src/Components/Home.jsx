import { Container, Row, Col } from 'react-bootstrap';
import gengarHero from '../assets/hero.png';

const Home = () => {
  return (
    <div className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col md={7}>
            <h1 style={{fontSize: '3.5rem'}}>Carlrich Dela Cruz</h1>
            <p style={{color: '#7a5b9f', fontSize: '1.5rem'}}>BSCS-SF Student @ APC</p>
            <p>
              I am a computer science student specializing in Cybersecurity and Forensics. 
              Welcome to my midterm portfolio project.
            </p>
          </Col>
          <Col md={5}>
            <img src={gengarHero} alt="Gengar" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
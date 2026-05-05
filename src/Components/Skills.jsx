import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

const Skills = () => {
  const skillList = [
    { name: "Full-Stack Web (React, JS, PHP)", level: 85 },
    { name: "Cybersecurity (Encryption, Forensics)", level: 80 },
    { name: "Database Management (MySQL)", level: 90 },
    { name: "Software Engineering (Python)", level: 75 }
  ];

  return (
    <Container id="skills" className="py-5">
      <h2 className="gengar-glow mb-4">Technical Prowess</h2>
      <Row className="justify-content-center">
        <Col md={8}>
          {skillList.map((skill, index) => (
            <div key={index} className="mb-3 text-start">
              <label>{skill.name}</label>
              <ProgressBar 
                now={skill.level} 
                label={`${skill.level}%`} 
                variant="danger" 
                style={{ backgroundColor: 'var(--border)' }}
              />
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
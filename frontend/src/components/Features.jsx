import { Container, Row, Col, Card } from 'react-bootstrap';

function Features() {
  return (
    <Container className="py-5" id="features">
      <h2 className="text-center mb-4">Why Choose SheCare?</h2>
      <Row className="g-4">
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Health Tracking</Card.Title>
              <Card.Text>Monitor your cycle, symptoms, and well-being with ease.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Wellness Tips</Card.Title>
              <Card.Text>Get personalized health & wellness insights.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Community Support</Card.Title>
              <Card.Text>Connect with experts and like-minded individuals.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Features;

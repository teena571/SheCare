import { Container, Button } from 'react-bootstrap';

function HeroSection() {
  return (
    <div className="bg-light text-center py-5">
      <Container>
        <h1 className="display-4 fw-bold">Empowering Women's Health</h1>
        <p className="lead">Track, manage, and take control of your health with SheCare.</p>
        <Button variant="primary" size="lg" href="#features">Get Started</Button>
      </Container>
    </div>
  );
}

export default HeroSection;

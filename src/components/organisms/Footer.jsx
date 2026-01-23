import { Container, Row ,Col } from "react-bootstrap";

const Footer = () => {
return (
    <footer className="bg-dark text-light py">
        <Container>
            <Row>
               <Col className="text-center">
                    <p className="text-white mb-0">&copy; 2026 Sportsshop. All Rights Reserved.</p>
               </Col>
            </Row>
            
    </Container>

    </footer>
);
};

export default Footer;
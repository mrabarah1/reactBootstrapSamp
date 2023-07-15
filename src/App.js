import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";

// the array of cards information
const cardsData = [
  {
    id: 1,
    image:
      "https://blog.logrocket.com/wp-content/uploads/2020/08/8-ways-deploy-react-app-free.png",
    title: "first card",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card content ",
    link: "https://www.google.com",
  },
  {
    id: 2,
    image:
      "https://blog.logrocket.com/wp-content/uploads/2020/08/8-ways-deploy-react-app-free.png",
    title: "second card",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card content ",
    link: "https://www.twitter.com",
  },
  {
    id: 3,
    image:
      "https://blog.logrocket.com/wp-content/uploads/2020/08/8-ways-deploy-react-app-free.png",
    title: "third card",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card content ",
    link: "https://www.google.com",
  },
];


function App() {
  return (
    <>
      <div className="App">
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">About</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Container fluid>
          <h1>React Bootstrap Design</h1>
          <Row className="card-holder">
            {/* here we map through the cardsData to make it dynamic */}
            {cardsData.map((cardData) => {
                // i destructure the cardData
              const { id, image, description, title, link } = cardData;
              return (
                <Col sm={3} key={id}>
                  <div>
                    <Card>
                      <Card.Img variant="top" src={image} />
                      <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <a href={link} className="btn btn-primary">
                          Read More
                          {/* <i className="fas fa-chevron-right"></i> */}
                        </a>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
}
export default App;

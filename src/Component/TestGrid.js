import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function TestGrid() {
  return (
    <Container fluid>
      <Row>
        <Col style={{ backgroundColor: "red", height: "100px" }} xs={6} md={3}>
          Lorem ipsum dolor sit amet.
        </Col>
        <Col
          style={{ backgroundColor: "green", height: "100px" }}
          xs={6}
          md={3}
        >
          Lorem ipsum dolor sit amet.
        </Col>
        <Col style={{ backgroundColor: "blue", height: "100px" }} xs={6} md={3}>
          Lorem ipsum dolor sit amet.
        </Col>
        <Col style={{ backgroundColor: "red", height: "100px" }} xs={6} md={3}>
          Lorem ipsum dolor sit amet.
        </Col>
      </Row>
    </Container>
  );
}

export default TestGrid;

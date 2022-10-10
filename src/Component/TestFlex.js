import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function TestFlex() {
  return (
    <Container>
      <Row>
        <Col md={6} className="d-flex justify-content-center">
          <Button className="m-2" variant="primary">
            Tambah
          </Button>
          <Button className="m-2" variant="secondary">
            Import
          </Button>
          <Button className="m-2" variant="success">
            Export
          </Button>
        </Col>
        <Col md={3} xs={6}>
          <Form.Group className="m-3">
            <Form.Control type="text" placeholder="Search" />
          </Form.Group>
        </Col>
        <Col md={3} xs={6}>
          <Form.Group className="m-3" size="lg">
            <Form.Select>
              <option>-TAHUN-</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
}

export default TestFlex;
